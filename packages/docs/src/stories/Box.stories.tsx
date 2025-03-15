import { Box, BoxProps, Text } from '@ignite-ui/react'

import { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: <Text>Testando o elemento box</Text>,
  },
  argTypes: {
    children: {
      control: false,
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
