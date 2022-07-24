import GPlogo from '../components/Logo/Logo';
import Heading from '../components/Heading/Heading';
import Nav from '../components/Nav/Nav';
import SearchBar from "../components/Suche/SearchBar";
import PlantData from "../components/Suche/plantsdata.json";
import LinieOben from '../components/Linien/Oben'
import LinieUnten from '../components/Linien/Unten'
import styles from '../styles/Layout.module.css';

const navItems = [{
    href: 'http://localhost:3000',
    label: 'Verzeichnis',
    isCurrent: false,
}, {
    href: '/createToDos',
    label: 'ToDos',
    isCurrent: false,
},{
    href: '/',
    label: 'Suche',
    isCurrent: true,
}]

export default function Suche() {

    return (
        <div className={styles.wrapper}>
            <GPlogo />
            <LinieOben/>
            <Heading>Suche</Heading>
            <div className="App"><SearchBar placeholder="Gebe eine Begriff ein" data={PlantData} /></div>
            <LinieUnten/>
            <Nav items={navItems} />
        </div>
    );
}