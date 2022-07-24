import React from 'react';
import styles from './todolists.module.css';

const Todo = ({ todo, removeTodo, handleChange }) => {
    
    return (
        <div  className={styles.listpoint}>
            <input type="checkbox"
                checked={todo.done}
                onChange={()=>handleChange (todo.id)}/>
                
                    <span> {todo.listpoint} </span>
                    <span className={styles.deleteLP} onClick={() => { removeTodo(todo.id) }}> X </span>
        </div>
    )
}

export default Todo;

