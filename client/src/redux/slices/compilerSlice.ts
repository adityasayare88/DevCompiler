import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CompilerSliceStateType {
  html: string;
  css: string;
  javascript: string;
  python: string;
  java: string;
  currentLanguage: "html" | "css" | "javascript" | "java" | "python";
}

const initialState: CompilerSliceStateType = {
  html: "",
  css: "",
  javascript: "",
  python: "",
  java: "",
  currentLanguage: "html",
};

const compilerSlice = createSlice({
  name: "compilerSlice",
  initialState,
  reducers: {
    updateCurrentLanguage: (
      state,
      action: PayloadAction<CompilerSliceStateType["currentLanguage"]>
    ) => {
      state.currentLanguage = action.payload;
    },
  },
});

export default compilerSlice.reducer;
export const { updateCurrentLanguage } = compilerSlice.actions;
