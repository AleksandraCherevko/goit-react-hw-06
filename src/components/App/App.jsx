import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SeacrhBox";
import Contact from "../Contact/Contact";

export default function App() {
  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <Contact />
    </div>
  );
}
