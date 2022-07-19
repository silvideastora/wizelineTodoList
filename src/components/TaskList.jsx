import React, {useState} from 'react';
import TaskForm from './TaskForm';
import Task from './Task';

export default function TaskList() {
//como va a ser un array 
 const [tasks , setTasks] = useState([]); //inicialmente task es un array vacio
  
 const addTask = task => {
   if(task.text.trim()) {
     task.text = task.text.trim();
     const currentTask = [task, ...tasks];
     setTasks(currentTask);
   }
 } 

 const deleteTask = id => {
  const currentTasks = tasks.filter(tarea => tarea.id !== id);
  setTasks(currentTasks)
 }
 const completeTask = id => {
  const currentTasks = tasks.map(task => {
    if(task.id === id){
      task.complete = !task.complete;
    }
    return task;
  })
  setTasks(currentTasks);
}

 return (
        <>
          <TaskForm 
            onSubmit={addTask}/>
            <div className='task-list-container'>
                {
                  tasks.map((task) => 
                  <Task
                  key={task.id}
                  id={task.id}
                  text={task.text} 
                  complete={task.complete}
                  completeTask={completeTask}
                  deleteTask={deleteTask}/>
                  )
                }
            </div>
        </>
    )
}
