import styles from '../../styles/Drink.module.css'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
const Spel = () => {
    const router = useRouter();
    const { naam } = router.query;
    const [tak, settak] = useState("");

    

    const tasks = ['drink 15 slokken','trekt em binnen', 'drink je drankje leeg','drink 3 slok bij elke opdracht tot het aan jou is', 
    'drink 2 shotjes', 'drink je drankje leeg uit je schoen','trek je tshirt over je hoofd en drink 5 slokken erdoor','binnetrekken me rietje' 
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