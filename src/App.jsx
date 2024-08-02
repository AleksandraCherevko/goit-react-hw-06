// import { useSelector } from "react-redux";

// import { ContactForm } from "./ContactForm/ContactForm";
// import { ContactList } from "./ContactList/ContactList";
// import { Filter } from "./Filter/Filter";

// export const App = () => {
//   const users = useSelector((state) => state.contacts.items);

//   return (
//     <section>
//       <div>
//         <h1>Phonebook</h1>
//         <ContactForm />
//       </div>
//       <div>
//         <h2>Contacts</h2>
//         {!users.length ? (
//           <h3>Your phonebook is empty. Add your first contact</h3>
//         ) : (
//           <>
//             <h3>Your phonebook has {users.length} contacts</h3>
//             <Filter />
//             <ContactList />
//           </>
//         )}
//       </div>
//     </section>
//   );
// };

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ContactList from "./components/ContactList/ContactList";
import { addContact } from "./redux/store"; // Adjust the import path to your actual store file

const initialContacts = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Initialize Redux store with contacts
    initialContacts.forEach((contact) => dispatch(addContact(contact)));
  }, [dispatch]);

  return <ContactList />;
}
