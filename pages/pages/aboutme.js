import Head from 'next/head'
import styles from '../../styles/Home.module.css'
export default function Projects() {
    return (
        <div className={styles.container}>
            <Head>
                <title>About Me</title>
                <link rel="icon" href="/icon.png" />
            </Head>

            <main className={styles.aboutme}>

                <h1 className={styles.title}>
                    <span style={{ color: "blue" }}>About Me</span>
                </h1>

            </main>
            <div className={styles.verticalBar}></div>
            <p className={styles.aboutMeParagraph}>Hi, I'm Aidan Strong! I'm a second year at UCLA majoring in Computer Science,
            and minoring in Pure Mathematics.
                <br></br>
                <br></br>
                When I'm not completing PSets, I like to <a href="https://store.steampowered.com/app/1460290/Loop/" style={{ color: "blue" }}>program video games</a>,
                <a href="https://www.facebook.com/UclaSmaugUltimate/" style={{ color: "blue" }}> play ultimate frisbee</a>, and preform. I'm interested in research and work regarding computer graphics, game engines, and game theory.
                </p>

            <footer className={styles.footer}>
                &copy; Aidan Strong 2021
        </footer>

        </div >
    )
} ``