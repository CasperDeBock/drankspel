import styles from '../../styles/Kinkay.module.css'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
const Spel = () => {
    const router = useRouter();
    const { naam } = router.query;
    const [tak, settak] = useState("");

    

    const tasks = ['ga op de linker persoon zijn schoot zitten', 'geef de 3de persoon van jou een kus op de wang',
    'geef de 2de persoon links van jou een lapdance','trek een kleding stuk uit', 'kies welk stuk kleding de linker persoon van jou moet uitdoen',
    'bottlespin een flesje en geef een kus aan de persoon die wordt aangeduid','blote torso voor 3 rondes','bodyshot met persoon rechts van jou',
    'leg lijntje zout op de nek 4de persoon rechts van je, lik het op en trekt je drankje binnen (of de persoon ;))'
    ]
 
    function createtotal(){
        const randomElement = tasks[Math.floor(Math.random() * tasks.length)];
        const randomName = naam == undefined ? "" : naam[Math.floor(Math.random() * naam.length)];
        
        const total =  randomName + " " + randomElement ;
        return total;
    
    }

    useEffect(() => {settak(createtotal())},[]);

    
    return (
        <>
        <body className={styles.body}>
            <Head>
                <title>D&D | Game</title>
            </Head>
            <div className={styles.container}>
            <h1>SPEEL!</h1>
                <p>{tak}</p>
                <button onClick={() => settak(createtotal())} className={styles.card}>Genarate Task</button>
            </div>
    </body>
        </>
    );
}

export default Spel;