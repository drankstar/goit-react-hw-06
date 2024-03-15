import { useEffect, useState } from "react"
import ContactForm from "./components/ContactForm/ContactForm"
import ContactList from "./components/ContactList/ContactList"

import SearchBox from "./components/SearchBox/SearchBox"

import styles from "./App.module.css"

const toStandartRegister = (value) => value.toLocaleLowerCase()

const initialContacts = () => {
  const localStorageContacts = localStorage.getItem("myContacts")
  return localStorageContacts !== null ? JSON.parse(localStorageContacts) : []
}

function App() {
  const [inputSearch, setInputSearch] = useState("")
  const [contacts, setContacts] = useState(initialContacts)

  useEffect(() => {
    localStorage.setItem("myContacts", JSON.stringify(contacts))
  }, [contacts])

  const onSearch = (evt) => {
    setInputSearch(evt.target.value)
  }

  const addContacts = (contact) => {
    setContacts((prev) => [...prev, contact])
  }

  const filtredContacts = () => {
    if (!inputSearch) {
      return contacts
    }
    return contacts.filter((el) =>
      toStandartRegister(el.name).includes(toStandartRegister(inputSearch))
    )
  }

  const onDeleteContact = (id) => {
    setContacts((prev) => prev.filter((el) => el.id !== id))
  }

  return (
    <div className={styles.wrap}>
      <h1 className={styles.title}>Phonebook</h1>
      <ContactForm addContacts={addContacts} />
      {contacts.length ? (
        <>
          <SearchBox inputSearch={inputSearch} onSearch={onSearch} />
          <ContactList
            contacts={filtredContacts()}
            onDeleteContact={onDeleteContact}
          />
        </>
      ) : (
        <p>Add your first contact</p>
      )}
    </div>
  )
}

export default App
