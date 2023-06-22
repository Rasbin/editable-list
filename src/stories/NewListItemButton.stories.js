import { useArgs } from '@storybook/client-api';
import { EditableList } from '../EditableList';
import { NewListItemButton } from '../NewListItemButton';
import { Button } from '../Button';
import { TextInput } from '../TextInput';
import { ListItemContainer } from '../ListItemContainer';
import { TransparentBackground } from '../TransparentBackground';

export default {
  component: NewListItemButton,
  title: 'molecules/NewListItemButton',
  subcomponents: {
    Button,
    TextInput,
    ListItemContainer,
    TransparentBackground,
  }
};

export const Basic = args => {
  return (
    <NewListItemButton { ...args } />
  );
}

export const InAList = args => {
  const [_, updateArgs] = useArgs();
  return (
    <>
      <EditableList items={args.items} />
      <NewListItemButton {...args} onAdd={newItem => updateArgs({ items: args.items.concat(newItem) }
      )} />
    </>
  );
}

InAList.args = {
  items: [],
}

