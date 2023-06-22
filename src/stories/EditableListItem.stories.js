import { useArgs } from '@storybook/client-api';
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

export const Basic = args => {
  const [_, updateArgs] = useArgs();

  return (
    <EditableListItem
      { ...args }
      onUpdate={(id, value) => updateArgs({ value })}
      onDelete={id => alert(`Storybook: Deleting ${id}`)} />
  );
  }
Basic.args = {
  id: '123',
  value: 'test@example.com',
};