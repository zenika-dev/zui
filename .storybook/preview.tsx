import type { Preview } from "@storybook/react";
import React from "react";
import { ZuiProvider } from "../src/theme/ZuiProvider";

const preview: Preview = {
  decorators: [
    (Story) => (
      <ZuiProvider>
        <Story />
      </ZuiProvider>
    ),
  ],
};

export default preview;
