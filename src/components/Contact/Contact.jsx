import { IoMdPerson } from "react-icons/io"
import { FaPhone } from "react-icons/fa"
import styles from "./Contact.module.css"
import { deleteContact } from "../../redux/contactsSlice"
import { useDispatch } from "react-redux"

const Contact = ({ contact }) => {
  const dispatch = useDispatch()
  const onDelete = () => {
    dispatch(deleteContact(contact.id))
  }
  return (
    <li className={styles.contact}>
      <div className={styles.info}>
        <div className={styles.row}>
          <IoMdPerson />
          {contact.name}
        </div>
        <div className={styles.row}>
          <FaPhone />
          {contact.number}
        </div>
      </div>
      <button onClick={onDelete}>Delet</button>
    </li>
  )
}

export default Contact
