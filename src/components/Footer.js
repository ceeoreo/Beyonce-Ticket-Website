import Link from "next/link";
import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <p>Follow us here!</p>
      <ul>
        <li className={styles.link}><Link href="https://twitter.com/ceeoreo_">Twitter</Link></li>
        <li className={styles.link}>Github</li>
      </ul>
    </div>
  )
}