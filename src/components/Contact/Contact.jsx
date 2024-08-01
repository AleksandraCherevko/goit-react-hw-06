import { useDispatch, useSelector } from "react-redux";
import ContactList from "../ContactList/ContactList";

export default function Contact() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.value);

  const handleContact = () => {
    dispatch({ type: "contacts/contact", payload: 10 });
  };

  return <ContactList />;
}
