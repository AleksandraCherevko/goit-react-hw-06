import { useDispatch, useSelector } from "react-redux";

export default function Contact() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.value);

  const handleContact = () => {
    dispatch({ type: "contacts/contact", payload: 10 });
  };

  return (
    <div className="contact-card">
      <p>{contacts}</p>
      <p>Potter</p>
      <button onClick={handleContact}>Delete</button>
    </div>
  );
}
