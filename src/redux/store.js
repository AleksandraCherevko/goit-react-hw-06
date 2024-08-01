import { configureStore } from "@reduxjs/toolkit";

export const deposit = (value) => {
  return { type: "balance/deposit", payload: value };
};

export const withraw = (value) => {
  return { type: "balance/withraw", payload: value };
};

export const reset = (value) => {
  return { type: "balance/reset", payload: value };
};

const initialState = { balance: { value: 0 } };

const balanceReducer = (state = { value: 0 }, action) => {
  switch (action.type) {
    case "balance/deposit":
      return { value: state.value + action.deposit };

    case "balance/withraw":
      return { value: state.value - action.payload };

    case "balance/reset":
      return { value: 0 };
  }
};
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

export const store = configureStore({
  reducer: { balance: balanceReducer },
});
