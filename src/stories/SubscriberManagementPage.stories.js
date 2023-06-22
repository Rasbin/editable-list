import { SubscriberManagementPage } from "../SubscriberManagementPage";
import { EditableList } from "../EditableList";

export default {
  component: SubscriberManagementPage,
  title: 'organisms/SubscriberManagementPage',
  subcomponents: {
    EditableList
  }
}

export const Basic = () => {
  return (
    <SubscriberManagementPage />
  );
}