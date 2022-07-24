import React, { useState } from 'react';
import styles from './addTodo.module.css'


const AddTodo = ({ addTodo }) => {
    
    const [listpoint, setListpoint] = useState()
    const handleSubmit = (e) => {
        e.preventDefault()
        const newTodo = { id: Math.random(), listpoint: listpoint, done: false }
        addTodo(newTodo)
        setListpoint("")
    }
    return (
        <div className={styles.inputTodo}>
            <form onSubmit={handleSubmit}>
                <input className={styles.inputField} type="text"
                    value={listpoint}
                    onChange={(e) => setListpoint(e.target.value)}
                    placeholder="neues ToDo"
                    required />
                <input className={styles.btnAdd} type="submit" value="+"/>
            </form>
        </div>
    )
}

export default AddTodo;