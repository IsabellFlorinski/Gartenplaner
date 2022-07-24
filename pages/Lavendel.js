import { v4 as uuidv4 } from 'uuid';
import { usePersistedState } from '../services/persistedState';
import GPlogo from '../components/Logo/Logo';
import Heading from '../components/Heading/Heading';
import Nav from '../components/Nav/Nav';
import Lavendel from '../components/Plants/Lavendel';
import Edit from '../components/Buttons/EditButton';
import Delete from '../components/Buttons/DeleteButton';
import LinieOben from '../components/Linien/Oben'
import LinieUnten from '../components/Linien/Unten'
import styles from '../styles/Layout.module.css';

const navItems = [{
    href: 'http://localhost:3000',
    label: 'Verzeichnis',
    isCurrent: true,
}, {
    href: '/createToDos',
    label: 'ToDos',
    isCurrent: false,
},{
    href: '/suche',
    label: 'Suche',
    isCurrent: false,
    }]

export default function lavendel() {

    return (
        <div className={styles.wrapper}>
            <GPlogo />
            <LinieOben/>
                <Heading>Verzeichnis</Heading><Edit/><Delete/>
            <Lavendel />
            <LinieUnten/>
                <Nav items={navItems} />
        </div>
    );
}