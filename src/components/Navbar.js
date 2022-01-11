import {
  Link,
} from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => (
  <nav className={styles.navCont}>
    <h1 className={styles.title}><Link className={styles.link} to="/">Math Magicians</Link></h1>
    <ul className={styles.linkCont}>
      <li className={styles.linkEl}>
        <Link className={styles.link} to="/">Home</Link>
      </li>
      <li className={styles.linkEl}>
        <Link className={styles.link} to="/calculator">Calculator</Link>
      </li>
      <li className={styles.linkEl}>
        <Link className={styles.link} to="/quote">Quote</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
