import { useState } from "react";
import { EditableList } from "./EditableList";
import { NewListItemButton } from "./NewListItemButton";

export const SubscriberManagementPage = () => {
  const [items, setItems] = useState([]);

  return (
    <>
      <h1>Email Subscribers</h1>
      <EditableList
        items={items}
        onUpdateItems={updatedItems => setItems(updatedItems)} />
      <NewListItemButton onAdd={newItem => setItems(items.concat(newItem))} />
    </>
  );
}

