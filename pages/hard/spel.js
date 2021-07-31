import styles from '../../styles/Hard.module.css'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
const Spel = () => {
    const router = useRouter();
    const { naam } = router.query;
    const [tak, settak] = useState("");

    

    const tasks = ['Sterk Shotje!', 'Shotie met het hoofd', '20x pompen elke pomp 1 slok','Binnetrekken!','5 sprong met water','binnetrekken me rietje','drink je drankje leeg uit je schoen'
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