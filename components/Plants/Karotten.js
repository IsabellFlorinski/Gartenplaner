import styles from './plants.module.css';

const Karotten = () => {
    return (
        < div className={styles.plantContent}>
            <h3 className={styles.heading}>- - - - Karotten - - - - </h3>
            <br />
            <b> Standort: </b>
            <p className={styles.ptext}>hell, sonnig und warm</p>
            <br/>
            <b> Ernte: </b>
            <p className={styles.ptext}>3 Monate nach Aussaat</p>
            <br/>
            <b> Wintervorbereitung: </b>
            <p className={styles.ptext}>keine</p>
            <br/>
            <b> Pflege: </b>
            <p className={styles.ptext}>gießen</p>
            <br/>
            <b> Anmerkung: </b>
            <p className={styles.ptext}>Boden vorn im Garten ist zu hart</p>   
        </div>

    );
}

export default Karotten;