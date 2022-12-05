import { createSlice } from "@reduxjs/toolkit";

type ToastSlice = {
  title: string;
  color: "red" | "teal";
  message: string;
};

const initialState: ToastSlice = {
  title: "",
  color: "teal",
  message: "",
};

const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    setToast: (state, payload) => {
      state.title = payload.payload.title;
      state.color = payload.payload.color;
      state.message = payload.payload.message;
    },
    clearToast: (state) => {
      state.title = "";
      state.color = "teal";
      state.message = "";
    },
  },
});

// Action creators are generated for each case reducer function
export const { setToast, clearToast } = toastSlice.actions;

export default toastSlice.reducer;
