import Link from "next/link"
import styles from "../styles/NavBar.module.css"
import AuthButtons from "./AuthButtons"
import { useUser } from "@auth0/nextjs-auth0/client"

export default function NavBar() {
  const { user } = useUser();

  return (
    <ul className={styles.nav}>
      <li><Link href="/">Home</Link></li>
			<li><Link href="/about">About</Link></li>
      {user && (
        <>
          <li><Link href="/profile">Profile</Link></li>
        </>
      )} 
			<li><AuthButtons /></li>     
    </ul>
  )
}