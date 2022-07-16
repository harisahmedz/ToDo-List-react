import React,{useState} from 'react';
import styles from './addtask.module.css';

const AddTask =(props)=>{
    const [enteredTitle,setTitle] = useState('');
    const [enteredDate,setDate] = useState('');
    const titleChangeHandler =(event)=>{

        setTitle(event.target.value);
    }
    const dateChangeHandler =(event)=>{

        setDate(event.target.value);
    }
    const SubmitHandler = (event)=>{
        event.preventDefault();
        if(enteredTitle.trim()==="" || enteredDate.trim()===""){
                alert("Can't Submit Empty");
        }
        else{
        const TaskData = {
            id:(parseInt(props.id)+1).toString(),
            title:enteredTitle,
            DueDate: new Date(enteredDate),
            
        }
        
        setTitle('');
        setDate('');
        props.onSaveTask(TaskData);
        }
    }
    return (
<form  className={styles.header} onSubmit={SubmitHandler}>
    <h2>ADD TASK</h2>
    <div className={styles.InputStyle}>
    <input type="text" placeholder="Title..." value={enteredTitle} onChange={titleChangeHandler}/>
    <input type="date" value={enteredDate} onChange={dateChangeHandler} />
    <button className={styles.addBtn}>Add</button>
    </div>
</form>
    )
}

export default AddTask;