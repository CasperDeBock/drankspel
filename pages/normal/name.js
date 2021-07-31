import styles from '../../styles/Home.module.css'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
const Name = () => {
    const router = useRouter();
    const { aantal } = router.query;
    console.log(aantal);
    const spelers = [];
    for(var i = 0; i < aantal; i++){ 
        spelers.push(<div>Naam speler: <input name="naam" id="naam" type="text" /></div>)
    }
    
   

    return (
        <>
        <body className={styles.body}>
        <Head>
        <title>D&D | Game</title>
        </Head>
        <div className={styles.main}>
        <form action="spel" method="GET">
            <h1>Aantal spelers: {aantal} </h1>
            <div style={{display:"flex", flexDirection:"column"}}>{spelers}</div>
            <input type="submit" className={styles.card} value="Volgende" /> 
           
            </form>
           
        </div>
        </body>
        </>
    );
}

export default Name;