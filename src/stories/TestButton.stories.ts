import type { Meta, StoryObj } from '@storybook/vue3'
import { TestButton } from '../main'

const meta = {
  title: 'Components/TestButton',
  component: TestButton,
  tags: ['autodocs'],
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
} satisfies Meta<typeof TestButton>

export default meta

type Story = StoryObj<typeof TestButton>

export const Default: Story = {}

export const Loading: Story = {
  args: {
    loading: true,
  }
}
