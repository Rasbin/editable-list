import { Button } from "../Button";
import { ListItemContainer } from "../ListItemContainer";
import { NormalText } from "../NormalText";
import { TextInput } from "../TextInput";

export default {
  component: ListItemContainer,
  title: 'atoms/ListItemContainer'
}

export const Basic = args => (
  <ListItemContainer>
    { args.containsText && <NormalText>test@example.com</NormalText> }
    { args.containsButton && <Button text="Click me!" /> }
    { args.containsInput && <TextInput placeholder="Enter some text..." /> }
  </ListItemContainer>
);

Basic.args = {
  containsText: true,
  containsButton: true,
  containsInput: true,
}