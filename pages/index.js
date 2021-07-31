import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'
import Footer from '../comps/Footer';
import Link from 'next/link'
import bier from './images/bieur.png'
import duivel from './images/devel.png'
import kink from './images/kink.png'
import drink from './images/drink.png'
export default function Home() {
  return (
    <>
    <body className={styles.body}>
    <Head>
      <title>D&D | Home</title>
    </Head>
    <div className={styles.cont}>
    <div className={styles.con}>
    <div className={styles.box}>
    <Link className={styles.white} href="/normal/game">
      <div><h4>Normal</h4></div>
      </Link>
      <Link className={styles.white} href="hard/game">
      <div><Image width="100" height="100" src={bier}/></div> 
      </Link>
    </div>
    <div className={styles.box}>
    <Link className={styles.white} href="hard/game">
      <div><h4>Hard</h4></div>
      </Link>
      <Link className={styles.white} href="hard/game">
      <div><Image width="100" height="100" src={duivel}/></div> 
      </Link>
    </div>
    <div className={styles.box}>
    <Link className={styles.white} href="kinkay/game">
      <div><h4>Kinkay</h4></div>
      </Link>
      <Link className={styles.white} href="hard/game">
      <div><Image width="100" height="100" src={kink}/></div> 
      </Link>
    </div>
    <div className={styles.box}>
    <Link className={styles.white} href="drink/game">
      <div><h4>Just Drink</h4></div>
      </Link>
      <Link className={styles.white} href="hard/game">
      <div><Image width="100" height="100" src={drink}/></div> 
      </Link>
    </div>
    </div>
    </div>
    </body>
    </>
  )
}

