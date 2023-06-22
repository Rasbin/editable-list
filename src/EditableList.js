import { EditableListItem } from "./EditableListItem"

export const EditableList = ({ items, onUpdateItems }) => {
  const deleteItem = id => {
    onUpdateItems(items.filter((_, i) => i !== id));
  }

  const updateItem = (id, updatedValue) => {
    onUpdateItems(items.map((item, i) => {
      if (i === id) {
        return updatedValue;
      }

      return item;
    }))
  }

  return (
    <>
      {items.map((item, i) => {
        return (
          <EditableListItem
          id={i}
          key={item}
          value={item}
          onDelete={deleteItem}
          onUpdate={updateItem} />
        )
      })}
    </>
  );
}