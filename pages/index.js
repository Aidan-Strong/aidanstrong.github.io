import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Aidan Strong</title>
        <link rel="icon" href="/icon.png" />
      </Head>

      <main className={styles.main}>
        <img className={styles.img} src="/headshot2.png"></img>
        <h1 className={styles.title}>
          Hello, I'm  <span style={{ color: "blue" }}>Aidan Strong</span>
        </h1>

        <p className={styles.description}>
          Computer Science Major & Mathematics minor at UCLA
        </p>

        {/* table stuff */}
        <div className={styles.grid}>
          <a href='/pages/aboutme' className={styles.card}>About Me</a>
          <a href='/resume.pdf' className={styles.card}>Resume</a>
          <a href='https://str0nkyk0ng.itch.io/' className={styles.card}>Game Development</a>
          <a href='mailto: aidan.m.strong@gmail.com' className={styles.card}>Contact</a>
        </div>

        <footer className={styles.footer}>
          &copy; Aidan Strong 2021
      </footer>
      </main>



    </div >
  )
}
