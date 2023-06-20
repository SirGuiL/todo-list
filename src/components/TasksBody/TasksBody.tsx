import { useEffect, useState } from 'react'
import { Empty } from '../Empty/Empty'
import styles from './Task.module.css'
import { TaskList } from '../TaskList/TaskList';
import { TasksInterface } from '../Hero/Hero.tsx';

interface TasksBodyProps {
  tasks: TasksInterface[];
  handleTasks: (tasks: TasksInterface[]) => void;
}

export const TasksBody = ({tasks, handleTasks}: TasksBodyProps) => {
  const [hasTasks, handleHasTasks] = useState(true);
  const [completedTasks, handleCompletedTasks] = useState(0);

  useEffect(() => {
    handleUpdateHasTasks(0);
    
    const completed = tasks.filter(task => task.completed);
    handleCompletedTasks(completed.length);
  }, []);

  useEffect(() => {
    handleUpdateHasTasks(0);
    
    const completed = tasks.filter(task => task.completed);
    handleCompletedTasks(completed.length);
  }, [tasks]);

  const handleUpdateHasTasks = (n: number) => {
    if (tasks.length - n === 0) {
      handleHasTasks(false);
    } else {
      handleHasTasks(true);
    }
  }

  const handleRemoveTask = (id: string) => {
    const newTasks = tasks.filter(task => task.id != id);
    handleTasks(newTasks);
    
    handleUpdateHasTasks(1);
    const completed = tasks.filter(task => task.completed);
    handleCompletedTasks(completed.length - 1);
  }

  const handleUpdateStatus = (id: string) => {
    const newTasks = tasks;

    newTasks.map((task) => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
    });

    handleTasks(newTasks);

    handleUpdateHasTasks(0);
    const completed = tasks.filter(task => task.completed);
    handleCompletedTasks(completed.length);
  }

  return (
    <section className={styles.container}>
      <div className={styles.links}>
        <span className={styles.tasksCreated}>Tarefas criadas <div>{tasks.length}</div></span>
        <span className={styles.tasksCreated}>Concluídas <div>{completedTasks}</div></span>
      </div>
      {hasTasks ? <TaskList tasks={tasks} handleRemoveTask={handleRemoveTask} handleUpdateStatus={handleUpdateStatus} /> : <Empty />}
    </section>
  )
}