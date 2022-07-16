import React from 'react';
import TodoDate from './todoDate';
import styles from './todoList.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from "@fortawesome/free-solid-svg-icons";
const todoList = (props)=>{
    return(
        <div className={styles.Container}>
            <div className={styles.Heading}>
                <h2>Due Date</h2>
                <h1>To Do List</h1>
                <h2>Actions</h2>
            </div>

                {
                    (props.items.length ===0)?<h1>No Tasks Available</h1>:
                    props.items.map((taskValue)=>(
                        <div className={styles.List}> 
                        <TodoDate date={taskValue.DueDate}/>
                        <h2>{taskValue.title}</h2>
                        <button className={styles.IconTrash} onClick={() => props.onDeleteItem(taskValue.id)}><FontAwesomeIcon icon={faTrash} /></button>
                        </div>
                        ))
                }
               
                            
        </div>
    )

}

export default todoList;