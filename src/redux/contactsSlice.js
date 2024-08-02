// У файлі contactsSlice.js оголоси слайс контактів, використовуючи функцію createSlice().
// Екшени слайса для використання в dispatch:
// addContact - додавання нового контакту до властивості items
// deleteContact - видалення контакту за id з властивості items
// Оголоси функції-селектори для використання в useSelector:
// selectContacts - повертає список контактів з властивості items.
// З файла слайса експортуй редюсер, а також його екшени і селектори.

// import { createAction } from "@reduxjs/toolkit";

// export const deposit = createAction("balance/deposit");
// console.log(deposit.type);

// export const withraw = createAction("balance/withraw");

// export const reset = createAction("balance/reset");

// export const balanceReducer = (state = { value: 0 }, action) => {
//   switch (action.type) {
//     case "balance/deposit":
//       return { value: state.value + action.deposit };

//     case "balance/withraw":
//       return { value: state.value - action.payload };

//     case "balance/reset":
//       return { value: 0 };
//   }
// };
// import { createSlice } from "@reduxjs/toolkit";

// const contactsInitialState = { items: [] };

// const contactSlice = createSlice({
//   name: "phone",
//   initialState: contactsInitialState,
//   reducers: {
//     addContact(state, action) {
//       state.items.push(action.payload);
//     },
//     deleteContact(state, action) {
//       state.items = state.items.filter((item) => item.id !== action.payload);
//     },
//   },
// });

// export const contactReducer = contactSlice.reducer;
// export const { addContact, deleteContact } = contactSlice.actions;
