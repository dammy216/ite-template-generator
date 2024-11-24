import { useState } from "react";
import { TaskList } from "../App";

type Props = {
  taskList: TaskList[];
  setTaskList: React.Dispatch<React.SetStateAction<TaskList[]>>;
};

const InputForm = (props: Props) => {
  const [inputTaskList, setInputTaskList] = useState<TaskList>({
    id: 0,
    date: new Date(),
    time: 0,
    content: "",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();

    props.setTaskList([
      ...props.taskList,
      {
        id: props.taskList.length,
        date: inputTaskList.date,
        time: inputTaskList.time,
        content: inputTaskList.content,
      },
    ]);

    setInputTaskList({ id: 0, date: inputTaskList.date, time: 0, content: "" });
  };

  const handleInput = (e: any) => {
    const { name, value } = e.target;
    setInputTaskList({ ...inputTaskList, [name]: value });
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input
          className="input"
          type="date"
          name="date"
          onChange={handleInput}
          value={
            inputTaskList.date
              ? new Date(inputTaskList.date).toISOString().split("T")[0]
              : ""
          }
        />
        <div>
          <input
            className="input"
            type="number"
            min="0"
            step="0.5"
            name="time"
            onChange={handleInput}
            value={inputTaskList.time}
          />
          <label> H</label>
        </div>
        <textarea
          rows={4}
          className="input"
          name="content"
          onChange={handleInput}
          value={inputTaskList.content}
        />
        <button type="submit">追加</button>
      </form>
    </div>
  );
};

export default InputForm;
