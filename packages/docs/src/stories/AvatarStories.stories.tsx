import { Avatar, AvatarProps } from '@ignite-ui/react'

import { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Data Display/Avatar',
  component: Avatar,
  args: {
    src: 'https://avatars.githubusercontent.com/u/44513166?v=4',
    alt: 'Adriano Klein',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WidthFallBack: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
