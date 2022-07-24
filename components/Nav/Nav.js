import Link from 'next/link';
import styles from './Nav.module.css';

const Nav = ({ items }) => (
    
    <div
        className={styles.nav}>
        {items.map(({ href, label, isCurrent }) => (
            <Link key={href} href={href}>
                <a
                    className={`${styles.item} ${isCurrent && styles.current}`}
                >
                    {label}
                </a>
            </Link>
        ))}
    </div>
);

export default Nav;