import React, { type FC } from 'react'
import type { User } from './ListUsers'
import { Link } from 'react-router'

type PropUserList ={
    onList:User[]
}
const UserCard:FC<PropUserList> = ({onList}) => {
  return (
    <div>
        <div className='grid grid-cols-5'>
               <p>id</p>
    <p>Name</p>
     <p>Email</p>
         <p>Phone</p>
          <p>Action</p>
        </div>
      {onList.map(user =>(
 <div key={user.id} className='grid grid-cols-5'>
            <div>
        
            <p>{user.id}</p>
        </div>
        <div>
        
            <p>{user.name}</p>
        </div>
          <div>
           
            <p>{user.email}</p>
        </div>
         <div>
        
            <p>{user.phone}</p>
        </div>
        <Link to={`/user-management/${user.id}`} className='cursor-pointer'>
        <p>view user</p>
        </Link>
        
      
    </div>
      ))}
   
    </div>

  )
}

export default UserCard
