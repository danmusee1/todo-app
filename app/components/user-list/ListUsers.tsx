import React, { useEffect, useState } from 'react'
import UserCard from './UserCard';
import CreateUser from './CreateUser';
import { DataTable } from 'components/data-table';
import { columns } from './components/columns';
export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}


const ListUsers = () => {
  const [users,setUsers]=useState<User[]>([])
  const [loading,setLoading]=useState(true)
  const [error,setError]= useState('')
console.log("the users",users)
  useEffect(()=>{
    fetchAllUsers()
  },[])

  const fetchAllUsers = async () =>{
fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data =>{
      setUsers(data)
        setLoading(false)
    })
    .catch(err=>{
      setLoading(false)
      setError(err.message)
      console.error("the error",err)
    })
  }
  if(loading) return <p className='text-white'>Loading...</p>
    if(error) return <p className='text-white'>{error}</p>

  return (
    <div>
       <div className=" lg:pl-10 lg:pr-10 pr-2 pl-2">
                  <DataTable columns={columns(fetchAllUsers)}  data={users} />
                </div>
      <UserCard onList={users}/>
     
    </div>
  )
}

export default ListUsers
