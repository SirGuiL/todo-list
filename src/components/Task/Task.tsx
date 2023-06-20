import styles from "./Task.module.css";
import { Trash, Check } from "@phosphor-icons/react";
import { useState } from "react";

interface TaskProps {
  id: string;
  text: string;
  completed: boolean;
  handleRemoveTask: (id: string) => void;
  handleUpdateStatus: (id: string) => void;
}

export const Task = ({
  id,
  text,
  completed,
  handleRemoveTask,
  handleUpdateStatus,
}: TaskProps) => {
  const [completedTask, setCompletedTask] = useState(completed);

  const removeTask = () => {
    handleRemoveTask(id);
  };

  const updateTask = () => {
    setCompletedTask(!completedTask)
    handleUpdateStatus(id);
  };

  return (
    <div className={styles.task}>
      {completedTask ? (
        <div className={styles.checkBoxCompleted} onClick={updateTask}>
          <Check size={12} />
        </div>
      ) : (
        <div className={styles.checkBox} onClick={updateTask}></div>
      )}
      {completedTask ? (
        <span className={styles.completedSpan}>{text}</span>
      ) : (
        <span className={styles.span}>{text}</span>
      )}
      <Trash size={18} onClick={removeTask} />
    </div>
  );
};
