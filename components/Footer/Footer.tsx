import Link from 'next/link';
import css from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={css.footer}>
      <div className={css.content}>
        <p>© {new Date().getFullYear()} NoteyPop. All rights reserved.</p>
        <div className={css.wrap}>
          <p>Developer: Daryna Yusikova</p>
          <p>
            Contact us:
            <Link href="mailto:darynayusikova@gmail.com">darynayusikova@gmail.com</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
