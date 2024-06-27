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
}

const initialState: CompilerSliceStateType = {
  fullCode: {
    html: `
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>To-Do List</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container">
    <h1>To-Do List</h1>
    <input type="text" id="taskInput" placeholder="Add a new task">
    <button id="addTaskButton">Add Task</button>
    <ul id="taskList"></ul>
  </div>
  <script src="scripts.js"></script>
</body>
</html>
`,
    css: `
body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}

.container {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 300px;
  text-align: center;
}

h1 {
  margin-bottom: 20px;
}

#taskInput {
  width: 80%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

#addTaskButton {
  padding: 10px 20px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

#addTaskButton:hover {
  background-color: #218838;
}

#taskList {
  list-style-type: none;
  padding: 0;
}

.taskItem {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f9f9f9;
  padding: 10px;
  margin: 5px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.taskItem button {
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  padding: 5px 10px;
}

.taskItem button:hover {
  background-color: #c82333;
}
`,
    javascript: `
document.getElementById('addTaskButton').addEventListener('click', function() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    addTask(taskText);
    taskInput.value = '';
  }
});

function addTask(taskText) {
  const taskList = document.getElementById('taskList');
  const taskItem = document.createElement('li');
  taskItem.className = 'taskItem';
  
  const taskContent = document.createElement('span');
  taskContent.textContent = taskText;

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', function() {
    taskList.removeChild(taskItem);
  });

  taskItem.appendChild(taskContent);
  taskItem.appendChild(deleteButton);
  taskList.appendChild(taskItem);
}
`,
    python: "this is python code",
    java: "this is java code",
  },
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
    updateCodeValue: (state, action: PayloadAction<string>) => {
      state.fullCode[state.currentLanguage] = action.payload;
    },
    updateFullCode: (
      state,
      action: PayloadAction<CompilerSliceStateType["fullCode"]>
    ) => {
      state.fullCode = action.payload;
    },
  },
});

export default compilerSlice.reducer;
export const { updateCurrentLanguage, updateCodeValue, updateFullCode } = compilerSlice.actions;
