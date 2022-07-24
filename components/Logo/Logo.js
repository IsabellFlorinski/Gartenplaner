import React from 'react';
import Image from 'next/image';
import logo from './logo.png';
import styles from './logo.module.css';

function GPlogo() {
    return (
        <div className={styles.logo}>
            <Image src={logo} alt="logo" height="120" width="300" />
        </div>
    )
}

export default GPlogo;
