import css from "./ContactForm.module.css";

export default function ContactForm() {
  return (
    <div>
      <p className={css.inputTitle}>Name</p>
      <input className={css.input} type="text" />
      <p className={css.inputTitle}>Number</p>
      <input className={css.input} type="text" />
      <button className={css.addContactBtn} type="button">
        Add Contact
      </button>
    </div>
  );
}
