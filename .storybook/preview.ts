import type { Preview, VueRenderer as Renderer } from '@storybook/vue3'
import { withThemeByClassName } from '@storybook/addon-themes'

const preview: Preview = {
  decorators: [
    withThemeByClassName<Renderer>({
      themes: {
        light: ' ',
        dark: 'dark',
      },
      defaultTheme: 'light',
    }),
  ],
}

export default preview
