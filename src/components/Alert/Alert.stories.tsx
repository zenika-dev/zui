import type { Meta, StoryObj } from "@storybook/react";
import { Alert } from "./Alert";
import { FacebookOutlined } from "@ant-design/icons";
import { Button } from "../Button";

const meta: Meta<typeof Alert> = {
  title: "Components/Alert",
  component: Alert,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["info", "success", "warning", "error"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Info: Story = {
  args: {
    title: "This is an info alert.",
    type: "info",
  },
};

export const Success: Story = {
  args: {
    title: "Operation completed successfully.",
    type: "success",
  },
};

export const Warning: Story = {
  args: {
    title: "Please review this warning.",
    type: "warning",
  },
};

export const Error: Story = {
  args: {
    title: "An error has occurred.",
    type: "error",
  },
};


export const CustomIcon: Story = {
  args: {
    title: "This is an alert with a custom icon.",
    customIcon: <FacebookOutlined />,
  },
};

export const WithDescription: Story = {
  args: {
    title: "Alert with description",
    description: "This is a more detailed description of the alert content.",
    type: "info",
  },
};

export const Closable: Story = {
  args: {
    title: "This alert can be dismissed.",
    type: "success",
    closable: true,
  },
};

export const WithAction: Story = {
  args: {
    title: "This alert is has an action",
    type: "general",
    banner: true,
    closable: true,
    description: "This is a more detailed description of the alert content.",
    customIcon: <FacebookOutlined />,
    action: <Button onClick={() => alert("action clicked")}>Check Posts</Button>
  },
};

export const Banner: Story = {
  args: {
    title: "This alert is displayed as a banner.",
    type: "warning",
    banner: true,
  },
};
