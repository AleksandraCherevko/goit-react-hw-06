import { configureStore } from "@reduxjs/toolkit";
// створили стор
const initialState = {
  contacts: {
    value: 0,
  },
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "contacts/contact":
      return {
        contacts: {
          value: state.contacts.value + action.payload,
        },
      };

    default:
      return state;
  }
};

export const store = configureStore({
  reducer: rootReducer,
});
