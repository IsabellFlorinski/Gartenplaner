import GPlogo from '../components/Logo/Logo';
import Heading from '../components/Heading/Heading';
import Nav from '../components/Nav/Nav';
import TodoContainer from '../components/ToDoContainers/container';
import LinieOben from '../components/Linien/Oben'
import LinieUnten from '../components/Linien/Unten'
import styles from '../styles/Layout.module.css';

const navItems = [{
    href: 'http://localhost:3000',
    label: 'Verzeichnis',
    isCurrent: false,
}, {
    href: '/',
    label: 'ToDos',
    isCurrent: true,
},{
    href: '/suche',
    label: 'Suche',
    isCurrent: false,
    }]

export default function ToDoList() {

    return (
        <div className={styles.wrapper}>
            <GPlogo />
            <LinieOben/>
            <Heading>ToDos</Heading>
            <TodoContainer />
            <LinieUnten/>
                <Nav items={navItems} />
        </div>
    );
}