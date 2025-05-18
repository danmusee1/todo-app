import React, { useEffect, useState } from 'react'
import UserCard from './UserCard';
export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}


const ListUsers = () => {
  const [users,setUsers]=useState<User[]>([])
console.log("the users",users)
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data =>{
      setUsers(data)
      
    })
    .catch(err=>{
      console.error("the error",err)
    })
  },[])
  return (
    <div>
      <UserCard onList={users}/>
    </div>
  )
}

export default ListUsers
