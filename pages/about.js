import styles from '../styles/Home.module.css'
import Head from 'next/head'
const About = () => {
    return (
        <>
        <Head>
        <title>D&D | About</title>
        </Head>   
        <div>
            <h1>About</h1>
            <p>Drunk And Dunk is een drankspel voor jong (niet te jong) en oud waar je opdrachten krijgt. Als je een opdracht niet accepteert moet je pwinten drinken</p>
            <div className={styles.container}>
            <p></p>
            </div>
        </div>
        </>
    );
}

export default About;