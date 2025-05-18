import React, { type FC } from 'react'
type Task = {
  id:number
  text:string
  done:boolean
}

type PropTaskList ={
onCompleteTask:(id:number) =>void
  onDeleteTask:(id:number)=>void
taskList:Task[];
};
const Todolist:FC<PropTaskList> = ({taskList,onDeleteTask,onCompleteTask}) => {
  return (
    <div >
      {taskList?.map(task => (
        <div key={task.id}
           className={` ${
          task.done ? "line-through  text-green-500" : "text-white"
        } text-black`}>
          <div  className='border p-4 rounded-lg space-y-2'>
        <div className='flex justify-between'>
            <p className=''>{task.text}</p>
            <div className='flex space-x-2'>
                <button onClick={()=>onCompleteTask(task.id)}>✅</button>
                <button onClick={() =>onDeleteTask(task.id) }>🗑️</button>
            </div>
        </div>
        </div>
        </div>
        
      ))}
     
      
    </div>
  )
}

export default Todolist
