import { nanoid } from "nanoid"
import styles from "./SearchBox.module.css"
import { useDispatch, useSelector } from "react-redux"
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice"
import { selectContacts } from "../../redux/contactsSlice"
const id = nanoid()

const SearchBox = () => {
  const dispatch = useDispatch()
  const name = useSelector(selectNameFilter)
  const contacts = useSelector(selectContacts)

  const onSearch = (evt) => {
    const { value } = evt.target
    dispatch(changeFilter(value))
  }

  if (contacts.length === 0) return <p>Add your first contact</p>

  return (
    <div className={styles.inputBox}>
      <label className={styles.label} htmlFor={id}>
        Find contacts by name
      </label>
      <input
        className={styles.field}
        id={id}
        type='text'
        value={name}
        onChange={onSearch}
      />
    </div>
  )
}

export default SearchBox
