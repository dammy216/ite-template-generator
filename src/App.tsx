import { useState } from "react";
import "./App.css";
import InputForm from "./components/InputForm";
import Result from "./components/Result";

export type TaskList = {
  id: number;
  date: Date;
  time: number;
  content: string;
};
function App() {
  const [taskList, setTaskList] = useState<TaskList[]>([]);
  return (
    <div className="App">
      <InputForm taskList={taskList} setTaskList={setTaskList} />
      <Result taskList={taskList} setTaskList={setTaskList}/>
    </div>
  );
}

export default App;
