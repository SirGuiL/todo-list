import { ClipboardText } from '@phosphor-icons/react'

import styles from './Empty.module.css'

export const Empty = () => {
  return (
    <div className={styles.tasks}>
      <ClipboardText size={56} />
      <span className={styles.title}>Você ainda não tem tarefas cadastradas</span>
      <span>Crie tarefas e organize seus itens a fazer</span>
    </div>
  )
}