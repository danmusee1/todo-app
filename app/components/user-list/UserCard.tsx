import React, { type FC } from 'react'
import type { User } from './ListUsers'

type PropUserList ={
    onList:User[]
}
const UserCard:FC<PropUserList> = ({onList}) => {
  return (
    <div>
        <div className='grid grid-cols-4'>
               <p>id</p>
    <p>Name</p>
     <p>Email</p>
         <p>Phone</p>
        </div>
      {onList.map(user =>(
 <div key={user.id} className='grid grid-cols-4'>
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
      
    </div>
      ))}
   
    </div>

  )
}

export default UserCard
