import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CompilerSliceStateType {
  fullCode: {
    html: string;
    css: string;
    javascript: string;
    python: string;
    java: string;
  };
  currentLanguage: "html" | "css" | "javascript" | "java" | "python";
  currentCode: string;
}

const initialState: CompilerSliceStateType = {
  fullCode: {
    html: "this is html code",
    css: "this is css code",
    javascript: "this is js code",
    python: "this is python code",
    java: "this is java code",
  },
  currentLanguage: "html",
  currentCode: "",
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
      state.currentCode = state.fullCode[action.payload];
    },
    updateCodeValue: (
      state,
      action: PayloadAction<{
        language: CompilerSliceStateType["currentLanguage"];
        code: string;
      }>
    ) => {
      const { code, language } = action.payload;
      state.fullCode[language] = code;
    },
    updateCurrentCode: (state, action: PayloadAction<string>) => {
      state.currentCode = action.payload;
    },
    updateHTML: (state, action: PayloadAction<string>) => {
      state.fullCode.html = action.payload;
    },
    updateCSS: (state, action: PayloadAction<string>) => {
      state.fullCode.css = action.payload;
    },
    updateJS: (state, action: PayloadAction<string>) => {
      state.fullCode.javascript = action.payload;
    },
    updatePYTHON: (state, action: PayloadAction<string>) => {
      state.fullCode.python = action.payload;
    },
    updateJAVA: (state, action: PayloadAction<string>) => {
      state.fullCode.java = action.payload;
    },
  },
});

export default compilerSlice.reducer;
export const {
  updateCurrentLanguage,
  updateCodeValue,
  updateCurrentCode,
  updateHTML,
  updateCSS,
  updateJS,
  updatePYTHON,
  updateJAVA,
} = compilerSlice.actions;
