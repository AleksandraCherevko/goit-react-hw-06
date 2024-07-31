import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SeacrhBox";

export default function App() {
  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
    </div>
  );
}
