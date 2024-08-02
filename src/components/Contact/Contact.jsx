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

// import { useSelector, useDispatch } from "react-redux";
// import { deposit, withraw, reset } from "../../redux/contactsSlice";

// export default function Balance() {
//   const dispatch = useDispatch();
//   const credits = useSelector((state) => state.balance.value);

//   const handleDeposit = () => {
//     dispatch(deposit(value));
//   };

//   const handleWithraw = () => {
//     dispatch(withraw(5));
//   };

//   const handleReset = () => {
//     dispatch(reset());
//   };
//   return (
//     <div>
//       <p>Balance: {credits} credits</p>
//       <button onClick={handleDeposit}>Deposit credits</button>
//       <button onClick={handleWithraw}>Withraw</button>
//       <button onClick={handleReset}>Reset</button>
//     </div>
//   );
// }

// export default function Contact({ data: { id, name, number } }) {
//   return (
//     <div>
//       <div>
//         <p>{name}</p>
//         <p>{number}</p>
//       </div>
//       <button>Delete</button>
//     </div>
//   );
// }

export default function Contact({ data: { id, name, number }, onDelete }) {
  return (
    <div>
      <div>
        <p>{name}</p>
        <p>{number}</p>
      </div>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}
