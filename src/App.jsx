import ContactForm from "./components/ContactForm/ContactForm"
import ContactList from "./components/ContactList/ContactList"
import SearchBox from "./components/SearchBox/SearchBox"
import styles from "./App.module.css"
import { useSelector } from "react-redux"
import { selectContacts } from "./redux/contactsSlice"

function App() {
  const contacts = useSelector(selectContacts)

  return (
    <div className={styles.wrap}>
      <h1 className={styles.title}>Phonebook</h1>
      <ContactForm />
      {contacts.length === 0 ? <p>Add your first contact</p> : <SearchBox />}
      <ContactList />
    </div>
  )
}

export default App
