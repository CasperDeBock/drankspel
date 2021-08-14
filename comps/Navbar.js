import Link from 'next/link'
import styles from '../styles/Home.module.css'
const Navbar = () => {
    return (
       <nav>
           <div className="logo">
           <h1>Drunk And Dunk</h1>
           </div>
            <div className="menu">
           <Link className={styles.white} href="/"><a className={styles.white}>Home</a></Link>
           <Link className={styles.white} href="/about"><a className={styles.white}>About</a></Link>
           </div>
           </nav>
    );
}

export default Navbar;