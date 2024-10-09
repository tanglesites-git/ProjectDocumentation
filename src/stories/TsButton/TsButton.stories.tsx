import { Meta, StoryObj } from "@storybook/react";
import TsButton from "./TsButton";

const meta = {
  title: "Buttons/Button",
  component: TsButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    background: {
      options: ['information', 'danger', 'warning', 'success', 'error', 'muted'],
      control: { type: 'radio' },
      description: "This determines the tone and voice of the button",
      type: 'string'
    },
    material: {
      options: ['solid', 'outline'],
      control: { type: 'inline-radio' },
      description: "Color of the skin of the button",
      type: 'string'
    },
    shape: {
      options: ['sharp', 'soft', 'pill'],
      description: "This determines the smoothness of the corners of the button"
    },
    size: {
      options: ['small', 'medium', 'large'],
      description: "This determines the amount of padding and font-size of the button."
    }
  },
} satisfies Meta<typeof TsButton>

export default meta;
type Story = StoryObj<typeof meta>

export const SolidSquareInformationButton: Story = {
  args: {
    material: 'solid',
    label: 'Button',
    background: 'information'
  },
  
}


export const SolidSquareDangerButton: Story = {
  args: {
    material: 'solid',
    label: 'Button',
    background: 'danger'
  },  
}

export const SolidSquareWarningButton: Story = {
  args: {
    material: 'solid',
    label: 'Button',
    background: 'warning'
  },  
}

export const SolidSquareSuccessButton: Story = {
  args: {
    material: 'solid',
    label: 'Button',
    background: 'success'
  },  
}

export const SolidSquareErrorButton: Story = {
  args: {
    material: 'solid',
    label: 'Button',
    background: 'error'
  },  
}


export const SolidSquareMutedButton: Story = {
  args: {
    material: 'solid',
    label: 'Button',
    background: 'muted'
  },  
}
////////////////////////////////////////////////////////////////


export const OutlineSquareInformationButton: Story = {
  args: {
    material: 'outline',
    label: 'Button',
    background: 'information'
  },  
}


export const OutlineSquareDangerButton: Story = {
  args: {
    material: 'outline',
    label: 'Button',
    background: 'danger'
  },  
}

export const OutlineSquareWarningButton: Story = {
  args: {
    material: 'outline',
    label: 'Button',
    background: 'warning'
  },  
}

export const OutlineSquareSuccessButton: Story = {
  args: {
    material: 'outline',
    label: 'Button',
    background: 'success'
  },  
}

export const OutlineSquareErrorButton: Story = {
  args: {
    material: 'outline',
    label: 'Button',
    background: 'error'
  },  
}


export const OutlineSquareMutedButton: Story = {
  args: {
    material: 'outline',
    label: 'Button',
    background: 'muted'
  },  
}