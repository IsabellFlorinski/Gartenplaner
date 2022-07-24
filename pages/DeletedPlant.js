import React from 'react';
import GPlogo from '../components/Logo/Logo';
import Heading from '../components/Heading/Heading';
import Nav from '../components/Nav/Nav';
import LinieOben from '../components/Linien/Oben'
import LinieUnten from '../components/Linien/Unten'
import styles from '../styles/Layout.module.css';

const navItems = [{
    href: '/',
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

export default function Suche() {

    return (
        <div className={styles.wrapper}>
            <GPlogo />
            <LinieOben/>
            <Heading>Verzeichnis</Heading>
            <p className={styles.sonstText}> Pflanze erfolgreich gelöscht </p>
            <LinieUnten/>
            <Nav items={navItems} />
        </div>
    );
}