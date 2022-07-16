
import './App.css';
import TodoList from './components/todoList';
import AddTask from './components/addtask';
import React,{ useState } from 'react';

function App() {
  const DummyTask = [
    {
      id: '1',
      title:'Complete React JS',
      DueDate:new Date(2021,7,23),
    },
    {
      id: '0',
      title:'Freelance Course',
      DueDate:new Date(2021,7,30),
    },
  ];
  const [tasks, setTask]=useState(DummyTask);
  const saveTaskData=(enteredData)=>{
    // if(enteredData.title.trim()!=="" && enteredData.DueDate){

    // }
    setTask (prevTask =>{
      return [enteredData,...tasks]
    });
  }
  const DeleteTask=(taskID)=>{
    setTask(prevTask=>{
      const TasksNew= prevTask.filter(task =>task.id !==taskID);
      return TasksNew;
    });
  }

  console.log(tasks);
  return (
    <div>
      <AddTask id={tasks.length===0 ?0:tasks[0].id} onSaveTask={saveTaskData}/>  
      <TodoList items={tasks} onDeleteItem={DeleteTask}/>
    </div>
  );
}

export default App;
