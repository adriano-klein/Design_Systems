import type { StorybookConfig } from "@storybook/react-vite";
import { join, dirname } from "path";

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}

const config: StorybookConfig = {
  stories: [
    "../src/pages/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx|mdx)",
  ],
  addons: [
    {
      name: getAbsolutePath("@storybook/addon-essentials"),
      options: {
        docs: true,
      },
    },
    getAbsolutePath("@storybook/addon-onboarding"),
    getAbsolutePath("@chromatic-com/storybook"),
    getAbsolutePath("@storybook/addon-interactions"),
    getAbsolutePath("@storybook/addon-a11y"),
  ],
  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {},
  },
  docs: {
    autodocs: true,
  },
  typescript: {
    reactDocgen: "react-docgen-typescript",
  },
  viteFinal: (config, { configType }) => {
    if (configType === "PRODUCTION") {
      config.base = "/Design_Systems/";
    }
    return config;
  },
};

export default config;
