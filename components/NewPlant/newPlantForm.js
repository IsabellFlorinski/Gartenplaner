import React, { Component } from 'react';
import styles from './newPlant.module.css';
import BackToV from '../Buttons/BackToV';

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pflanze: '', standort: '', ernte: '',
            wintervorbereitungen: '', pflege: '', anmerkungen: '',
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange (event) {
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    
    handleSubmit (event) {
            const { pflanze, standort, ernte, wintervorbereitungen, pflege, anmerkungen } = this.state
            event.preventDefault()
        alert(
            `Neuer Eintrag gespeichert: \n
                Pflanze: ${ pflanze }
                Standort: ${ standort }
                Ernte: ${ ernte }
                Wintervorbereitungen: ${ wintervorbereitungen }
                Pflanze: ${ pflege }
                Pflanze: ${ anmerkungen }`
        )
    }

    render(){
    return (
        <><form onSubmit={this.handleSubmit} className={styles.newPlantContent}>
            <label className={styles.heading}>Neuen Pflanzeneintrag erstellen</label><br /><br />
            <label className={styles.label}>Pflanze:
                <br /><input className={styles.inputField} type="text" name="pflanze" value={this.state.pflanze} onChange={this.handleChange} />
            </label><br />
            <label className={styles.label}>Standort:
                <br /><input className={styles.inputField} type="text" name="standort" value={this.state.standort} onChange={this.handleChange} />
            </label><br />
            <label className={styles.label}>Ernte:
                <br /><input className={styles.inputField} type="text" name="ernte" value={this.state.ernte} onChange={this.handleChange} />
            </label><br />
            <label className={styles.label}>Wintervorbereitungen:
                <br /><textarea className={styles.inputTextarea} name="wintervorbereitungen" value={this.state.wintervorbereitungen} onChange={this.handleChange} />
            </label><br />
            <label className={styles.label}>Pflege:
                <br /><textarea className={styles.inputTextarea} name="pflege" value={this.state.pflege} onChange={this.handleChange} />
            </label><br />
            <label className={styles.label}>Anmerkungen:
                <br /><textarea className={styles.inputTextarea} name="anmerkungen" value={this.state.anmerkungen} onChange={this.handleChange} />
            </label><br />
            <input className={styles.saveBtn} type="submit" value="SAVE" />
        </form>
            <BackToV /></> 
            )
        }
}

export default Form