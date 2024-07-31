import css from "./SearchBox.module.css";

export default function SearchBox() {
  return (
    <div className={css.searchBox}>
      <p className={css.seacrhBoxTitle}>Find contacts by name</p>
      <input className={css.seacrhInput} type="text" />
    </div>
  );
}
