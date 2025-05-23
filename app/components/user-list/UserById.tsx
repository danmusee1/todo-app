import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import type { User } from './ListUsers'
const UserById  =  () => {
  const [user,setUser]=useState<User>()
  console.log("the user",user)
  const { id } = useParams<{ id: any }>()
  useEffect(() =>{
   
     fetchUser()

  },[id])

   const fetchUser = async ()=>{
      try{
        const response= await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        const userData = await response.json()
        setUser(userData)

       

      }catch(err){
        console.log(err)
      }

    }



  
  return (
    <div>
      <h1>View user by id {id}</h1>
      <div className='grid grid-cols-2'>
   <p>Name</p>
      <p>{user?.name}</p>
        <p>Email</p>
      <p>{user?.email}</p>
            <p>Phone</p>
      <p>{user?.phone}</p>
      </div>
   
    </div>
  )
}

export default UserById
