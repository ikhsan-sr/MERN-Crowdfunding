import Link from 'next/link';
import { Button } from '@mui/material';
import styles from './Header.module.scss';

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
            <Button variant="outlined" className={styles.btnLogin}>
              Register
            </Button>
          </a>
          <a className={styles.cta} href="#">
            <Button variant="contained" className={styles.btnRegister}>
              Login
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
}
