import styles from '../../styles/Home.module.css'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
const Spel = () => {
    const router = useRouter();
    const { naam } = router.query;
    const [tak, settak] = useState("");

    

    const tasks = ['drink 3 slokken',
        'drink wedstrijd met persoon over u',
         'staar contest met degene links van jou ', 
        'duimworstelen met persoon rechts van jou', 'drink 3 slokken zonder handen', 
        'kruisdrinken! met de derde persoon links van jou', 
         'drink 3 slokken ondersteboven', 
         'drink je drankje leeg', 
        'noem deze persoon voor 2 rondes de naam van de mama', 
        'ga contact drinken', 'drink met minst dominante hand',
        'Zing een liedje!', 'praat voor vijf rondes met een raar accent',
        'laat de groep je in een belachelijke positie zetten en trek een foto'
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