import { deleteContact } from "../../redux/contactsSlice";
import { useDispatch } from "react-redux";
import css from "./Contact.module.css";

export default function Contact({ name, phoneNumber, id }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.contactCard}>
      <div className={css.contactInfo}>
        <p className={css.contactInfo}>{name}:</p>

        <p className={css.contactInfo}>{phoneNumber}</p>
      </div>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
