import { useState } from "react";
import { Button } from "./Button";
import { TextInput } from "./TextInput";
import { ListItemContainer } from "./ListItemContainer";
import { NormalText } from "./NormalText";

export const EditableListItem = ({ value }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [editedValue, setEditedValue] = useState(value);

  return (
    <ListItemContainer>
      { isEditing ? ( <TextInput
                        autofocus
                        style={{ flex: 1, marginRight: '8px' }}
                        value={editedValue}
                        onChange={ e => setEditedValue(e.target.value) } />
                    ) : (
                      <NormalText style={{ flex: 1, marginRight: '8px' }}>{value}</NormalText>
                    )}
      { isEditing ? (
        <Button color="green" text="Save" filled style={{ marginRight: '8px' }} onClick={() => {
          setIsEditing(false);
        }} />
      ) : (
        <Button color="green" text="Edit" style={{ marginRight: '8px' }} onClick={() => {
          setIsEditing(true)
        }} />
      )}

      { isDeleting ? ( 
        <Button
          text="Are you sure?"
          color="red"
          style={{ marginRight: '8px' }}
          filled
          onClick={() => {
            alert('Deleting...')
            setIsDeleting(false);
          }}
        /> ) : (
          
        <Button
          text="Delete"
          color="red"
          onClick={() => setIsDeleting(true)} />
          )
      }
    </ListItemContainer>
  );
}