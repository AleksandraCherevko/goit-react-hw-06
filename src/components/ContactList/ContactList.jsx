// import Contact from "../Contact/Contact";
// import { useSelector } from "react-redux";

// export default function ContactList({ contacts, handleList }) {
//   const dispatch = useDispatch();
//   const contactsList = useSelector((state) => state.contacts.value);
//   const handleList = () => {
//     dispatch({
//       type: "contacts/delete",

//     });
//   };
//   return (
//     <ul>
//       {contacts.map((contact) => (
//         <li key={contact.id}>
//           <Contact data={contact} />
//         </li>
//       ))}
//     </ul>
//   );

import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../redux/store";
import Contact from "../Contact/Contact";

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <ul>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <Contact data={contact} onDelete={() => handleDelete(contact.id)} />
        </li>
      ))}
    </ul>
  );
}
