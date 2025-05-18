import React, { useState, type FC } from 'react'
type formProps ={
    onsaveTask: (text:string) =>void
}
const TodoForm:FC<formProps> = ({onsaveTask}) => {
    const [text,setText]=useState('')

    const handleSubmit = (e:any) =>{
       
        e.preventDefault()
        const capturedText=text.trim()
        if(capturedText){
            onsaveTask(capturedText)
            setText('')
            console.log("the text submitted",capturedText) 
        }

    }
  return (
    <div>
        <form onSubmit={handleSubmit} className='space-y-2'>
            <input  className='border w-full rounded-md py-4 text-white' value={text} onChange={(e)=>setText(e.target.value)}   />
            <button type='submit' className='bg-white text-black font-bold w-full rounded-lg py-2'>
                Submit
            </button>
        </form>
      
    </div>
  )
}

export default TodoForm
