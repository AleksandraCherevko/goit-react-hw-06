// import { configureStore } from "@reduxjs/toolkit";

// const initialState = { balance: { value: 0 } };

// const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "balance/deposit":
//       return {
//         ...state,
//         balance: { value: state.balance.value + action.payload },
//       };

//     case "balance/withraw": {
//       return {
//         ...state,
//         balance: { value: state.balance.value - action.payload },
//       };
//     }

//     case "balance/reset": {
//       return { ...state, balance: { value: 0 } };
//     }
//     default:
//       return state;
//   }
// };

// export const store = configureStore({reducer:{
//     balance: balanceReducer
// }});

// export const store = configureStore({
//   reducer: { balance: balanceReducer },
// });
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import { configureStore } from "@reduxjs/toolkit";
// import { contactReducer } from "./contactSlice";
// import { filterReducer } from "./filterSlice";

// const persistConfig = {
//   key: "contacts",
//   storage,
// };

// const persistedContactReducer = persistReducer(persistConfig, contactReducer);

// export const store = configureStore({
//   reducer: {
//     contacts: persistedContactReducer,
//     filter: filterReducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

import { configureStore, createSlice } from "@reduxjs/toolkit";

// Define initial state
const initialState = {
  contacts: {
    items: [],
  },
  filters: {
    name: "",
  },
};

// Create slice for contacts
const contactsSlice = createSlice({
  name: "contacts",
  initialState: initialState.contacts,
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
    // Add more reducers if needed
  },
});

const rootReducer = {
  contacts: contactsSlice.reducer,
};

// Create store
export const store = configureStore({
  reducer: rootReducer,
});

// Export actions
export const { addContact, deleteContact } = contactsSlice.actions;
