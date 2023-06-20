import { Task } from "../Task/Task";
import styles from "./TaskList.module.css";

interface TaskListProps {
  tasks: TaskProps[];
  handleRemoveTask: (id: string) => void;
  handleUpdateStatus: (id: string) => void;
}

interface TaskProps {
  id: string;
  text: string;
  completed: boolean;
}

export const TaskList = ({
  tasks,
  handleRemoveTask,
  handleUpdateStatus,
}: TaskListProps) => {
  return (
    <div className={styles.taskList}>
      {tasks.map((task: TaskProps) => {
        return (
          <Task
            text={task.text}
            completed={task.completed}
            key={task.id}
            id={task.id}
            handleRemoveTask={handleRemoveTask}
            handleUpdateStatus={handleUpdateStatus}
          />
        );
      })}
    </div>
  );
};
