import React, { useState, type FC } from 'react'
type propvalueClick ={
  value:string
  onClick: (value:string)=>void
}
const Square:FC<propvalueClick> = ({value, onClick}) => {
 
  return (
    <div onClick={()=>onClick(value)} className='border w-16 h-16 cursor-pointer text-2xl text-center '>
      <div className='pt-4'>
     {value}
      </div>
    
    </div>
  )
}

export default Square