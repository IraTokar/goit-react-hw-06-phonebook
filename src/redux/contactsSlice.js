import { createSlice, nanoid } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const phoneContacts = {
    items: [
        { id: 'id-1', name: 'Albus Dumbledore', number: '459-12-56' },
        { id: 'id-2', name: 'Severus Snape', number: '443-89-12' },
        { id: 'id-3', name: 'Minerva McGonagall', number: '645-17-79' },
        { id: 'id-4', name: 'Remus Lupin', number: '227-91-26' },]
};

const contactSlice = createSlice({
    name: 'contacts',
    initialState: phoneContacts,
    reducers: {
        addContacts: {
            reducer(state, action) {
                state.items.push(action.payload);
            },
        },
        prepare(newContact) {
            return {
                payload: { id: nanoid(), ...newContact }
            };
        },
        removeContact(state, action) {
            const index = state.items.findIndex(contact => contact.id !== action.payload);

            state.items.splice(index, 1)
        },

    }
});


export const { addContacts, removeContact } = contactSlice.actions;

export const contactsReducer = persistReducer(
    { key: 'contacts', storage },
    contactSlice.reducer
)