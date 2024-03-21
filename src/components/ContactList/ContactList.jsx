import { useSelector } from "react-redux"
import Contact from "../Contact/Contact"
import { selectContacts } from "../../redux/contactsSlice"
import { selectNameFilter } from "../../redux/filtersSlice"
import { useMemo } from "react"
import { toStandartRegister } from "../../utils/a"
import styles from "./ContactList.module.css"

const ContactList = () => {
  const name = useSelector(selectNameFilter)
  const contacts = useSelector(selectContacts)

  const filtredContacts = useMemo(() => {
    if (!name) {
      return contacts
    }
    return contacts.filter((el) =>
      toStandartRegister(el.name).includes(toStandartRegister(name))
    )
  }, [contacts, name])

  return (
    <ul className={styles.container}>
      {filtredContacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  )
}

export default ContactList
