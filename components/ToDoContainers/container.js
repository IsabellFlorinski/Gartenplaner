import React ,{useState} from 'react';
import Todo from '../ToDoLists/todoList';
import AddTodo from '../addTodo/addTodo';
import styles from '../ToDoContainers/TodoContainer.module.css'


const todoList = [
    {id:1,listpoint: 'Anfang März vorziehen',done:true},
    {id:2,listpoint: 'neue Anzuchterde kaufen',done:false},
]
const TodoContainer = () => {
    const [todos, setTodos] = useState(todoList)
    const handleAddTodo = (newTodo) => {
      const newTodoList=[...todos,newTodo]
      setTodos(newTodoList)
  }
  const handleRemoveTodo=(id)=>{
      const newTodoList=todos.filter(todo=>todo.id!==id)
      setTodos(newTodoList)
  }
  const hanldeCheckboxChange=(id)=>{
      const newTodoList=todos.map(todo=>{
          if(todo.id===id)
            return {...todo,done:!todo.done}
        return todo;
        })
        setTodos(newTodoList)
  }
    return (
        <div >
            <AddTodo addTodo={handleAddTodo} />
            {todos.length > 0 ? todos.map((todo) =>
                <Todo className={styles.todolists} todo={todo} key={todo.id} removeTodo={handleRemoveTodo}
                handleChange={hanldeCheckboxChange} />)
                : <p className={styles.listpoint}>no todo left</p>}
        </div>
    )
}

export default TodoContainer;