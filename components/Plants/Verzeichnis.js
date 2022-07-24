import styles from './plants.module.css';
import Link from 'next/link';

const PlantsShort = () => {
    const plantnames = [{
        id: 1,
        href: "#",
        plantname: 'Ringelblume',
    }, {
        id: 2,
        href: "#",
        plantname: 'Salbei',
    }, {
        id: 3,
        href: "/Lavendel",
        plantname: 'Lavendel',
    }, {
        id: 4,
        href: "#",
        plantname: 'Basilikum',
    }, {
        id: 5,
        href: "/Karotten",
        plantname: 'Karotten',
    }, {
        id: 6,
        href: "#",
        plantname: 'Trauben (rot)',  
        }
    ];
    
    return (
        <div className={styles.plantContent}>
            {plantnames.map(({ id, href, onClick, type, plantname }) => (
                <a href={href} key={id}>
                    <button className={styles.btnPrimary}
                         onClick={onClick} type={type}>{plantname}
                    </button>
                </a>
            ))}
        </div>
        )
}
    
export default PlantsShort;