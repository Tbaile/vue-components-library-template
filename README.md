# Vue components library template

I've had my share of hiccups when creating a library, from TS configurations to development environments, it seems that
since JS is so fast-paced, it's hard to keep up with the best practices. This is the reason why this template exists, to
provide a single source of truth for all the best practices and tools you need to create a library.

The library is configured with the following tools:

- Vue 3 (with TypeScript and JSX support)
- Vite (with customization to allow export of TypeScript types in `dist`)
- Tailwind CSS v4
- Storybook 8
- Vitest 2

Additionally, the repo is configured with the following:

- Full docker dev and build environment
- GitHub Actions for CI/CD
- GitHub Pages for Storybook deployment
- DevContainer configuration
- Renovate for dependency updates

## Docker commands

To build the application, run:

```bash
docker buildx bake
```

This will build both the library and the storybook, they'll get exported directly into the `dist` and `storybook-static`
folders respectively.

To run storybook in development mode, run:

```bash
docker-compose up
```

This will start the storybook server, you can access it at `http://localhost:6006`.

## Setup

No additional setup is required, just clone the repo and start coding.

For the CI and automatic publishing, the following secrets are required:

- `RELEASE_PLEASE_TOKEN`: A GitHub token with `content` and `pull_request` permissions, additional info can be found in
  the [Release Please README](https://github.com/googleapis/release-please-action).
- `NPM_TOKEN`: A token with access to the NPM package, this is required for the automatic publishing of the library when
  a new tag is created.
