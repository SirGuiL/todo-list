import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';

import { AddButton } from '../AddButton/AddButton'
import { SearchBox } from '../SearchBox/SearchBox'
import { TasksBody } from '../TasksBody/TasksBody'
import styles from './Hero.module.css'
import { generateUuidv4 } from '../../utils/TaskUtils.ts'

export interface TasksInterface {
  id: string;
  text: string;
  completed: boolean;
}

export const Hero = () => {
  const [taskInputValue, handleTaskInputValue] = useState('');
  const [tasks, handleTasks] = useState<TasksInterface[]>([]);

  const notify = () => toast.error("Digite um texto antes de criar uma tarefa.");

  const handleAddTask = () => {
    if (!taskInputValue) {
      notify();
      return
    }
    const newTask = {
      id: generateUuidv4(),
      text: taskInputValue,
      completed: false
    }

    if (tasks.length > 0) {
      handleTasks([...tasks, newTask]);
    } else {
      handleTasks([newTask]);
    }

    handleTaskInputValue('');
  }

  return (
    <section className={styles.container}>
      <div className={styles.inputBox}>
        <SearchBox taskInputValue={taskInputValue} handleTaskInputValue={handleTaskInputValue} />
        <AddButton handleAddTask={handleAddTask} />
      </div>
      <TasksBody handleTasks={handleTasks} tasks={tasks} />
      <Toaster position="top-right" />
    </section>
  )
}