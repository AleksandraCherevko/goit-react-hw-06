// import css from "./Contact.module.css";
// import { useDispatch, useSelector } from "react-redux";

// export default function Contact({ data: { id, name, number }, onDelete }) {
//   const dispatch = useDispatch();
//   const contacts = useSelector((state) => state.contacts.value);

//   const handleDeposit = () => {
//     dispatch("5");
//   };

//   return (
//     <div className={css.contactsCard}>
//       <div className={css.contactsCardWrap}>
//         <p className={css.contactsName}>{contacts}</p>
//         <p>{number}</p>
//         <button className={css.contactsBtn} onClick={handleDeposit}>
//           Delete
//         </button>
//       </div>
//     </div>
//   );





import { useSelector, useDispatch } from "react-redux";
import { contactList, deleteContact } from "../../redux/store";

export default function Contact() {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.contacts.value);

  const handleDeposit = () => {
    dispatch(contactList(5));
  };

  const handleDelete = () => {
    dispatch(deleteContact());
  };

  return (
    <div>
      <p>Contact: {list}</p>
      <button onClick={handleDeposit}>Add</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
