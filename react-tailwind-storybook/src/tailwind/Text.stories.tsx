import type { Meta, StoryObj } from "@storybook/react";

import { Text } from "./Text";

const meta: Meta<typeof Text> = {
  title: "Example/Text",
  component: Text,
  tags: ["autodocs"],
  argTypes: {
    indent: {
      control: "select",
      description: "The indent of the text",
      options: ["indent-10"],
      type: "string",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {},
};
