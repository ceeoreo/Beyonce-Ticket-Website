import styles from '../styles/home.module.css'
import NavBar from '../components/NavBar'

function Home() {

  return (
    <main className={styles.main}>
      <NavBar />
      <div className={styles.intro}> 
        <h1>Beyonce - Act II</h1>
        <h2>Purchase tickets to the best show ever without the hassle of passwords</h2>
      </div>
      <h2> Buy Your Tickets Now! </h2>
      <div className={styles.cards}>
        <div className={styles.card}>
          <p>Basic ticket</p>
          <p>50 Bey Bucks</p>
          <button>Buy Now!</button>
        </div>
        <div className={styles.card}>
          <p>Premium ticket</p>
          <p>100 Bey Bucks</p>
          <button> Buy Now!</button>
        </div>
        <div className={styles.card}>
          <p>Extra Premium ticket</p>
          <p>200 Bey Bucks</p>
          <button>Buy Now!</button>
        </div>
      </div>
    </main>
  )
}

export default Home
