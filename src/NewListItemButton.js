import { useState } from "react";
import { ListItemContainer } from './ListItemContainer';
import { TransparentBackground } from "./TransparentBackground";
import { TextInput } from "./TextInput";
import { Button } from "./Button";

export const NewListItemButton = ({ onAdd = () => {} }) => {
  const [isActive, setIsActive] = useState(false);
  const [newItemText, setNewItemText] = useState('');

  return (
    <ListItemContainer>
    { isActive ? (
      <>
        <TransparentBackground onClick={() => {
          setIsActive(false);
        }} />

        <TextInput
          autoFocus
          style={{ flex: 1, marginRight: '8px', zIndex: 2 }}
          placeholder="Enter a new item..."
          value={newItemText}
          onChange={e => setNewItemText(e.target.value)} />
        <Button
          color="green"
          filled
          text="Add"
          style={{ marginRight: '8px', zIndex: 2 }}
          onClick={() => {
            onAdd(newItemText);
            setIsActive(false);
            setNewItemText('');
          }} />
        <Button color="red" text="Cancel" style={{ zIndex: 2 }} onClick={() => {
          setIsActive(false);
          setNewItemText('');
        }} />
      </>
    ) : (
      <Button
        text="+ Add Item"
        color="white"
        textColor="black"
        filled
        style={{ flex: 1 }}
        onClick={() => setIsActive(true)} />
    ) }
    </ListItemContainer>
  );
}