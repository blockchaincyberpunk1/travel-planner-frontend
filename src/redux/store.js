import { configureStore } from "@reduxjs/toolkit";
import planReducer from "./reducers/planReducer";
import userReducer from "./reducers/userReducer";

export const store = configureStore({
  reducer: {
    plans: planReducer, // Reducer for managing plans state
    user: userReducer, // Reducer for managing user state
    // You can add more reducers here as your app grows
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  // getDefaultMiddleware returns the default middleware for Redux Toolkit
  // You can add more middleware here if needed
});

export default store;
