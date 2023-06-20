import styles from './Logo.module.css'
import logo from '../../assets/rocket.svg'

export const Logo = () => {
  return (
    <div className={styles.logo}>
      <img src={logo} alt="todo logo" />
      <h1>to<span>do</span></h1>
    </div>
  )
}