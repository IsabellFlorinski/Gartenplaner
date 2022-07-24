import React from 'react';
import GPlogo from '../components/Logo/Logo';
import Heading from '../components/Heading/Heading';
import Nav from '../components/Nav/Nav';
import Form from '../components/NewPlant/newPlantForm';
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

const PlantForm = () => {

    {
        return (
        <div className={styles.wrapper}>
                <GPlogo />
                <LinieOben/>
                <Heading>Verzeichnis</Heading>
                <Form />
                <LinieUnten/>
                <Nav items={navItems} />
        </div>
    );
}
}

    export default PlantForm