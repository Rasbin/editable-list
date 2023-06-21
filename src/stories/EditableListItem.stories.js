import { EditableListItem } from '../EditableListItem';
import { Button } from "../Button";
import { TextInput } from "../TextInput";
import { ListItemContainer } from "../ListItemContainer";
import { NormalText } from "../NormalText";

export default {
  component: EditableListItem,
  title: 'molecules/EditableListItem',
  subcomponents: {
    Button,
    TextInput,
    ListItemContainer,
    NormalText
  }   
}

export const Basic = args => <EditableListItem { ...args } />
Basic.args = {
  id: '123',
  value: 'test@example.com',
};