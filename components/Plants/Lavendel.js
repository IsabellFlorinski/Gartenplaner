import styles from './plants.module.css';
import Image from 'next/image';

const Lavendel = () => {
    return (
        <div className={styles.plantContent}>
            <h3 className={styles.heading}> - - - - Lavendel - - - -</h3>
            <b> Standort: </b>
            <p className={styles.ptext}>sonnig und warm, wind- und regengeschützt</p>
            <br/>
            <b> Ernte: </b>
            <p className={styles.ptext}>Mitte Juli - Anfang August</p>
            <br/>
            <b> Wintervorbereitung: </b>
            <p className={styles.ptext}>mit Reisig oder Vlies schützen</p>
            <br/>
            <b> Pflege: </b>
            <p className={styles.ptext}>Schnitt im Sommer oder Frühjahr 2,5 cm ins ale Holz, grübe Triebe  sollen zu sehen sein</p>
            <br/>
            <b> Anmerkung: </b>
            <p className={styles.ptext}>Zaun verbessern, letztes Jahr hat sich immer ein Hund draufgelegt</p>   
        </div>

    );
}

export default Lavendel;