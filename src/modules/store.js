import { configureStore } from "@reduxjs/toolkit";
import scheduleReducer from "./schedule";
export default configureStore({
  reducer: { schedule: scheduleReducer },
});
