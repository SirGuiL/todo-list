import { Logo } from '../Logo/Logo'
import styles from './Header.module.css'


export const Header = () => {
  return (
    <header className={styles.container}>
      <Logo />
    </header>
  )
}