import type { Meta, StoryObj } from "@storybook/react";
import { LikeOutlined } from "@ant-design/icons";
import { Button } from "./Button";


const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "link"],
    },
    size: {
      control: "select",
      options: ["small", "middle", "large", "xlarge"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Button",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "Button",
    variant: "secondary",
  },
};

export const Link: Story = {
  args: {
    children: "Button",
    variant: "link",
  },
};


export const Icon: Story = {
  args: {
    children: "Button",
    variant: "primary",
    icon: <LikeOutlined />
  },
};

export const IconPlacementStart: Story = {
  args: {
    children: "Button",
    variant: "primary",
    icon: <LikeOutlined />,
    iconPlacement: "start",
  },
};
export const IconPlacementEnd: Story = {
  args: {
    children: "Button",
    variant: "primary",
    icon: <LikeOutlined />,
    iconPlacement: "end",
  },
};

export const Small: Story = {
  args: {
    children: "Button",
    size: "small",
  },
};

export const Middle: Story = {
  args: {
    children: "Button",
    size: "middle",
  },
};

export const Large: Story = {
  args: {
    children: "Button",
    size: "large",
  },
};

export const XLarge: Story = {
  args: {
    children: "Button",
    size: "xlarge",
  },
};

export const Loading: Story = {
  args: {
    children: "Button",
    loading: true,
  },
};

export const Disabled: Story = {
  args: {
    children: "Button",
    disabled: true,
  },
};

export const PillVariant: Story = {
  args: {
    children: "Button",
    round: true,
  },
};
