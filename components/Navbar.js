import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
            <Image src="/icon.png" alt="Logo" width={50} height={50} />
        </Link>
        <h1>WriteRight</h1> 
      </div>
      <ul className={styles.navLinks}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="https://github.com/ishasachan/WriteRight">Github</Link>
        </li>
      </ul>
    </nav>
  );
}
