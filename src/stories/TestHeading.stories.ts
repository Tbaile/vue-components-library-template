import type { Meta, StoryObj } from '@storybook/vue3'
import { TestHeading } from '../main'

const meta = {
  title: 'Components/TestHeading',
  component: TestHeading,
  tags: ['autodocs'],
} satisfies Meta<typeof TestHeading>

export default meta

type Story = StoryObj<typeof TestHeading>

export const Default: Story = {
  render: () => ({
    components: { TestHeading },
    template: `
      <TestHeading>
        This is an heading.
      </TestHeading>
    `,
  }),
}
