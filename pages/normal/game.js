import styles from '../../styles/Home.module.css'
import Head from 'next/head'
import Image from 'next/image'
import bir from '../images/bieur.png'

const Game = () => {
    return (
        <>
        <body className={styles.body}>
        <div className={styles.body}>
        <Head>
        <title>D&D | Game</title>
        </Head>
       
        <div className={styles.container}>
        <div className={styles.smallmarge}> <Image  width="100" height="100" src={bir}/></div>
        <form action="name" method="GET">
            <div className={styles.marge}>Hoeveel spelers zijn er aanwezig?</div>
            <input className={styles.form__label} type="number" id="aantal" name="aantal" />  
            <input type="submit" className={styles.card} value="Volgende" /> 
            
        </form>
        </div>

       
        </div>
        </body>
        </>
    );
}
 
 
export default Game;