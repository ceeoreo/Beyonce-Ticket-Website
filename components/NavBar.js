import Link from "next/link"
import styles from "../styles/NavBar.module.css"
import LoginButton from "./LoginButton"
// import AuthButtons from "./AuthButtons"


export default function NavBar() {
  return (
    <ul className={styles.nav}>
      <li><Link href="/">Home</Link></li>
			<li><Link href="/about">About</Link></li>
			<li><LoginButton /></li>      
    </ul>
  )
}