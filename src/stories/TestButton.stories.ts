import type { Meta, StoryObj } from '@storybook/vue3'
import { TestButton } from '../main'

const meta = {
  title: 'Components/TestButton',
  component: TestButton,
  tags: ['autodocs'],
} satisfies Meta<typeof TestButton>

export default meta

type Story = StoryObj<typeof TestButton>

export const Default: Story = {
  render: (args) => ({
    components: { TestButton },
    template: `
      <TestButton v-bind="args">
        Hello World!
      </TestButton>
    `,
    setup() {
      return { args }
    },
  }),
}

export const Loading: Story = {
  args: {
    loading: true,
  },

  render: (args) => ({
    components: {
      TestButton,
    },

    template: `
      <TestButton v-bind="args">
        Hello World!
      </TestButton>
    `,

    setup() {
      return { args }
    },
  }),
}
