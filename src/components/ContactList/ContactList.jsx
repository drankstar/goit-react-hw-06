import { useSelector } from "react-redux"
import Contact from "../Contact/Contact"
import { selectContacts } from "../../redux/contactsSlice"
import { selectNameFilter } from "../../redux/filtersSlice"
import { toStandartRegister } from "../../utils/toStandartRegister "
import { useMemo } from "react"

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
    <ul>
      {filtredContacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  )
}

export default ContactList
