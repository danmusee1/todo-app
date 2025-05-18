import React, { useState } from 'react'
import TodoForm from '~/components/todo/TodoForm'
import Todolist from '~/components/todo/Todolist'
import ListUsers from '~/components/user-list/ListUsers'
type Task ={
  id:number
  text:string
  done:boolean

}
const Welcome = () => {
  const [tasks,setTasks]=useState<Task[]>([])
  const handleSetTasks = (text:string) =>{
    const newTask = {
    id: Date.now(),
    text,
    done: false
  };
  setTasks(prev => [...prev, newTask]);
 
    console.log('all the tasks',tasks)

  }
  const compleateTask = (id:number) =>{
    console.log("the id to be completed",id)
    setTasks(prev =>prev.map(prev=> prev.id === id ? {...prev,done:true}:prev))

  }

  const deleteTask =(id:number) =>{
console.log("the id to be delited",id)
setTasks((prev) => prev.filter(prev=>prev.id!==id) )


  }

  return (
    <div className='pt-20'>
 
      <div className='flex justify-center w-full pt-5'>
        <div className='space-y-4'>
        <h1 className='font-bold text-center text-2xl '>Todo app</h1>
      <TodoForm onsaveTask={handleSetTasks}/>
     <Todolist taskList={tasks} onDeleteTask={deleteTask} onCompleteTask={compleateTask}/> 
     <div>
      <h1 className='text-white font-bold text-center'>List All users</h1>
      <ListUsers/>
     </div>
      </div>
        </div>
     
      

      
    </div>
  )
}

export default Welcome
