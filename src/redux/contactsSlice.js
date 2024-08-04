import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import initialContacts from "../components/initialContacts.json";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: initialContacts,
  },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare(newContact) {
        return {
          payload: {
            name: newContact.name,
            number: newContact.number,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact(state, action) {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
export const selectContacts = (state) => state.contacts.items;
