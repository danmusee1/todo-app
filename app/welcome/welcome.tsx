import React, { useState } from 'react'
import { Link ,Routes,Route} from 'react-router'
import TodoParent from '~/components/todo/TodoParent'
import UserParent from '~/components/user-list/UserParent'


const Welcome = () => {
  return (
   <div className='pt-20 w-full flex justify-center space-x-20'>
       <Link to='/'> home</Link>
      <Link to='/user-management'> user management</Link>
      <Link to='/todo-app'> todo app</Link>
       <Link to='/tic-tac'> Tic tack toe</Link>
      
 
    
     
      

      
    </div> 
  
  )
}

export default Welcome
 