import React from 'react';
import GPlogo from '../components/Logo/Logo';
import Heading from '../components/Heading/Heading';
import Nav from '../components/Nav/Nav';
import AddPlant from '../components/Buttons/AddPlantButton';
import PlantsShort from '../components/Plants/Verzeichnis'
import LinieOben from '../components/Linien/Oben'
import LinieUnten from '../components/Linien/Unten'
import styles from '../styles/Layout.module.css';

//Navigationsbar unten
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


export default function PlantShort() {

    //Hier sind die Komponenten der Startseite zu sehen
    return (
        <div className={styles.wrapper}>
            <GPlogo/>
            <Heading> Verzeichnis </Heading><AddPlant />
            <LinieOben/>
            <PlantsShort />
            <LinieUnten/>
            <Nav items={navItems} />
        </div>
    );
}