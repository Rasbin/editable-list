import { Button } from "../Button"

export default {
  component: Button,
  title: 'atoms/Button',
  args: {
    text: 'Click me!',
    color: 'blue'
  }
}

const Template = args => <Button { ...args } />

export const Unfilled = Template.bind({});
Unfilled.args = {
  filled: false,
}

export const Filled = Template.bind({});
Filled.args = {
  filled: true,
}

export const FullWidth = Template.bind({});
FullWidth.args = {
  filled: false,
  fullWidth: true,
}
