
// import { useState } from "react";
// import css from './ContactForm.module.css'

// export default function ContactForm({ onAdd }) {
//   const [name, setName] = useState("");
//   const [number, setNumber] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onAdd({ name, number });
//     setName("");
//     setNumber("");
//   };

//   return (
//     <form onSubmit={handleSubmit} className={css.form}>
//       <label className={css.label}>
//         Name
//         <input
//           className={css.input}
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//       </label>
//       <label className={css.label}>
//         Number
//         <input
//           className={css.input}
//           type="text"
//           value={number}
//           onChange={(e) => setNumber(e.target.value)}
//         />
//       </label>
//       <button className={css.addContactBtn} type="submit">
//         Add Contact
//       </button>
//     </form>
//   );
// }
