import styles from '../styles/home.module.css'
import NavBar from '../components/NavBar'

export default function About() {
    return (
        <main className={styles.main}>
            <NavBar />
            <h1>About</h1>
            <p>Beyonce is one the greatest artists of all time. She just released 2 new songs as part of her Act II project.</p>
        </main>
    )
}