import { PlusCircle } from '@phosphor-icons/react'

import styles from './AddButton.module.css'

interface AddButtonProps {
  handleAddTask: () => void;
}

export const AddButton = ({handleAddTask}: AddButtonProps) => {
  return (
    <button className={styles.button} onClick={handleAddTask}>
      Criar
      <PlusCircle size={20} />
    </button>
  )
}