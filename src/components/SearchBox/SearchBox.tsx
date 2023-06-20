import { ChangeEvent } from 'react';

import styles from './SearchBox.module.css'

interface SearchBoxProps {
  taskInputValue: string;
  handleTaskInputValue: (t: string) => void;
}

export const SearchBox = ({taskInputValue, handleTaskInputValue}: SearchBoxProps) => {
  const handleUpdateInputValue = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const text = event.target.value
    handleTaskInputValue(text);
  }
  
  
  return (
    <>
      <input 
        className={styles.searchBox}
        value={taskInputValue}
        /* @ts-ignore */
        onChange={handleUpdateInputValue}
        type="text"
        placeholder="Adicione uma nova tarefa"
      />
    </>
  )
}