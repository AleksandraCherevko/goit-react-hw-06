import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = { contacts: { value: 0 } };

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    contactList: (state, action) => {
      state.contacts.value += action.payload;
    },
    deleteContact: (state) => {
      state.contacts.value = 0;
    },
  },
});

export const { contactList, deleteContact } = contactsSlice.actions;

export const store = configureStore({
  reducer: contactsSlice.reducer,
});
