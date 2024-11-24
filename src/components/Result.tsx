import { useState, useEffect } from "react";
import { TaskList } from "../App";

type Props = {
  taskList: TaskList[];
  setTaskList: React.Dispatch<React.SetStateAction<TaskList[]>>;
};

const Result = (props: Props) => {
  const [textareaValue, setTextareaValue] = useState<string>("");

  useEffect(() => {
    setTextareaValue(
      props.taskList
        .map((task) => {
          const date =
            task.date instanceof Date ? task.date : new Date(task.date);

          return `${date.getMonth() + 1}月${date.getDate()}日(${date
            .toLocaleString("ja-JP", { weekday: "long" })
            .replace("曜日", "")})：${task.time}H ${task.content}`;
        })
        .join("\n")
    );
  }, [props.taskList]);

  const handleCopyClick = () => {
    navigator.clipboard
      .writeText(textareaValue)
      .then(() => {
        alert("内容がコピーされました!");
      })
      .catch((err) => {
        alert("コピーに失敗しました: " + err);
      });
  };

  return (
    <div className="result">
      <p>結果</p>
      <textarea
        rows={10}
        style={{ width: "350px" }}
        value={textareaValue}
        onChange={(e) => setTextareaValue(e.target.value)}
        readOnly
      />
      <div className="buttons">
        <button onClick={handleCopyClick}>コピー</button>
        <button onClick={() => props.setTaskList(props.taskList.slice(0, -1))}>
          一つ削除
        </button>
        <button onClick={() => props.setTaskList([])}>クリア</button>
      </div>
    </div>
  );
};

export default Result;
