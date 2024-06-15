import UILogo from "@/shared/components/ui/UILogo/UILogo.vue"
import type { Meta, StoryObj } from "@storybook/vue3"

const meta: Meta<typeof UILogo> = {
  component: UILogo,
}

export default meta
type Story = StoryObj<typeof UILogo>

export const Default: Story = {
  args: {
    content: "Logo",
  },
}
