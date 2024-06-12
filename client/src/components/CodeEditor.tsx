import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { tags as t } from "@lezer/highlight";
import { draculaInit } from "@uiw/codemirror-theme-dracula";
import { loadLanguage } from "@uiw/codemirror-extensions-langs";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import {
  updateCSS,
  updateHTML,
  updateJAVA,
  updateJS,
  updatePYTHON,
} from "@/redux/slices/compilerSlice";

export default function CodeEditor() {
  const currentLanguage = useSelector(
    (state: RootState) => state.compilerSlice.currentLanguage
  );

  const fullCode = useSelector(
    (state: RootState) => state.compilerSlice.fullCode
  );

  const dispatch = useDispatch();
  const[value,setValue] = React.useState("");
  const onChange = React.useCallback(
    (value: string) => {
      if (currentLanguage === "html") {
        dispatch(updateHTML(value));
      } else if (currentLanguage === "css") {
        dispatch(updateCSS(value));
      } else if (currentLanguage === "javascript") {
        dispatch(updateJS(value));
      } else if (currentLanguage === "python") {
        dispatch(updatePYTHON(value));
      } else if (currentLanguage === "java") {
        dispatch(updateJAVA(value));
      }
    },
    [dispatch, currentLanguage]
  );

  return (
    <CodeMirror
      value={fullCode[currentLanguage]}
      height="calc(100vh - 60px - 50px)"
      className="code-editor"
      extensions={[loadLanguage(currentLanguage)!]}
      onChange={onChange}
      theme={draculaInit({
        settings: {
          caret: "#c6c6c6",
          fontFamily: "monospace",
        },
        styles: [{ tag: t.comment, color: "#6272a4" }],
      })}
    />
  );
}
