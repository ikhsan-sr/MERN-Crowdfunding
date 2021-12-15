import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.wrapper}>
        <Link href="/">
          <img src="/logo.svg" alt="logo" className={styles.logo} />
        </Link>
        <nav>
          <ul className={styles.nav__links}>
            <li>
              <Link href="/blog">
                <a>Services</a>
              </Link>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
        </nav>
        <div className={styles.cta__wrapper}>
          <a className={styles.cta} href="#">
            <button className={styles.btn}>Register</button>
          </a>
          <a className={styles.cta} href="#">
            <button className={styles.btn}>Login</button>
          </a>
        </div>
      </div>
    </header>
  );
}
