import css from "./App.module.css";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";

export default function App() {
  return (
    <div className={css.phonebook}>
      <div className={css.container}>
        <h1 className={css.title}>Phonebook</h1>
        <div className={css.phonebookContentWrap}>
          <div className={css.containerCol}>
            <ContactForm />
          </div>
          <div className={css.containerCol}>
            <div className={css.phonebookContactsWrap}>
              <SearchBox />
              <ContactList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
