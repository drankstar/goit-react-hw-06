import { IoMdPerson } from "react-icons/io"
import { FaPhone } from "react-icons/fa"
import styles from "./Contact.module.css"

const Contact = ({ contact, onDeleteContact }) => {
  const handleClick = () => onDeleteContact(contact.id)

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
      <button onClick={handleClick}>Delet</button>
    </li>
  )
}

export default Contact
