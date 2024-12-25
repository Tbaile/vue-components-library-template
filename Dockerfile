FROM node:22.12.0 AS base
WORKDIR /app

FROM base AS development
ARG UID=1000
ARG GID=1000
RUN groupmod -g ${GID} node \
    && usermod -u ${UID} -g ${GID} node
CMD ["/bin/bash", "-c", "npm install && npm run storybook"]

FROM base AS library
COPY package.json .
COPY package-lock.json .
RUN npm ci
COPY src/components src/components
COPY src/main.css src/main.css
COPY src/main.ts src/main.ts
COPY env.d.ts .
COPY tsconfig.app.json .
COPY tsconfig.json .
COPY tsconfig.node.json .
COPY vite.config.ts .
RUN npm run build

FROM scratch AS dist
COPY --from=library /app/dist /

FROM library AS storybook
COPY .storybook .storybook
COPY src/stories src/stories
RUN npm run build-storybook

FROM scratch AS storybook-dist
COPY --from=storybook /app/storybook-static /

FROM nginx AS storybook-deploy
COPY --from=storybook /app/storybook-static /usr/share/nginx/html
