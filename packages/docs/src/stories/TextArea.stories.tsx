import { Box, TextArea, TextAreaProps, Text } from '@ignite-ui/react'

import { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Form/Text Area',
  component: TextArea,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="Label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text>Observations</Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'Add any observations here...',
  },
}

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
  },
}
