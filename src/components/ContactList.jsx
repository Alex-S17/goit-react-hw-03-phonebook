// import { Component } from "react";
import React from "react";
import PropTypes from "prop-types";
import { ContactItem } from "./ContactItem";
import css from "./ContactsList.module.css";

export const ContactsList = ({ arrayOfContacts, onDeleteContact }) => {
  return (
    <ul className={css.contactsList}>
      {arrayOfContacts.map(contact => (
        <ContactItem
          contact={contact}
          onDeleteContact={onDeleteContact}
          key={contact.id}
        />
      ))}
    </ul>
  );
};

ContactsList.propTypes = {
  arrayOfContacts: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
  })).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

// export class ContactsList extends Component {
//   render() {
//     const { arrayOfContacts, onDeleteContact } = this.props;
//     return (
//       <ul className={css.contactsList}>
//         <ContactItem
//           arrayOfContacts={arrayOfContacts}
//           onDeleteContact={onDeleteContact}
//         />
//       </ul>
//     );
//   };
// };

// ContactsList.propTypes = {
//   arrayOfContacts: PropTypes.arrayOf(PropTypes.exact({
//     id: PropTypes.string,
//     name: PropTypes.string,
//     number: PropTypes.string,
//   })).isRequired,
//   onDeleteContact: PropTypes.func.isRequired,
// };