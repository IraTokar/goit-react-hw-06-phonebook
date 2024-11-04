
import React from "react";
import { ContactsItem, Button } from './ContactsList.styled';

import { useSelector, useDispatch } from "react-redux";
import { getVisibleContacts } from "components/selectors";
import { removeContact } from "components/contactsSlice";

const ContactList = () => {
    const contacts = useSelector(getVisibleContacts);
    const dispatch = useDispatch();
    const handleDelete = () => dispatch(removeContact());
    return (
        <div>
            <ul>
                {contacts && contacts.map(contact => (
                    <ContactsItem key={contact.id}>
                        {contact.name + ': ' + contact.number}
                        {<Button
                            type='button'
                            name='delete'
                            onClick={handleDelete}
                            >delete</Button>}
                    </ContactsItem>
                ))}
            </ul>
        </div>
    )
};

export default ContactList;
