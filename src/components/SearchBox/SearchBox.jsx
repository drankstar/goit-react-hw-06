import { nanoid } from "nanoid"
import styles from "./SearchBox.module.css"
const id = nanoid()

const SearchBox = ({ inputSearch, onSearch }) => {
  return (
    <div className={styles.inputBox}>
      <label className={styles.label} htmlFor={id}>
        Find contacts by name
      </label>
      <input
        className={styles.field}
        id={id}
        type='text'
        value={inputSearch}
        onChange={onSearch}
      />
    </div>
  )
}

export default SearchBox
