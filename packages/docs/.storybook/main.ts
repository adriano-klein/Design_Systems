import type { StorybookConfig } from '@storybook/react-vite'; 

import { join, dirname } from "path"

/**
* This function is used to resolve the absolute path of a package.
* It is needed in projects that use Yarn PnP or are set up within a monorepo.
*/
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')))
}
const config: StorybookConfig = {
  "stories": ["../src/**/*.stories.tsx"],

  "addons": [
    {
      "name": getAbsolutePath('@storybook/addon-essentials'),
      "options": {
        "docs": false
      }
    },
    getAbsolutePath('@storybook/addon-onboarding'),
    getAbsolutePath('@chromatic-com/storybook'),
    getAbsolutePath('@storybook/addon-interactions')
  ],

  "framework": {
    "name": getAbsolutePath('@storybook/react-vite'),
    "options": {}
  },

  docs: {
    autodocs: true
  },

  typescript: {
    reactDocgen: "react-docgen-typescript"
  }
};
export default config;