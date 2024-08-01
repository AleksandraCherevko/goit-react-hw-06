import css from "./ContactList.module.css";

export default function ContactList() {
  return (
    <div className={css.contactCard}>
      <p className={css.contactName}>Name Name</p>
      <p className={css.contactNum}>+3949349893893</p>
      <button className={css.contactBtn} type="button">
        Delete
      </button>
    </div>
  );
}
