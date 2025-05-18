import React, { useState } from 'react'

const CreateUser = () => {
    const [name,setName] =useState('')
    const [email,setEmail]=useState('')
    const [phone,setPhone]=useState('')

    const handleFormInputs=(e:any) =>{
        e.preventDefault()
        const userName=name.trim()
         const userEmail=email.trim()
         const userPhone=phone.trim()
         if(userName && userEmail && userPhone  ){
            setName(userName)
            setEmail(userEmail)
            setPhone(userPhone)
            console.log("the names",userName,userEmail,userPhone)
         }


    }
  return (
    <div>
        <form onSubmit={handleFormInputs} className='space-y-2'>
            <div>
                <p>Name</p>
                <input value={name} className='w-full border rounded-lg  py-2 text-white' onChange={(e)=>setName(e.target.value)} />
            </div>
              <div>
                <p>Email</p>
                <input value={email} className='w-full border rounded-lg  py-2 text-white' onChange={(e)=>setEmail(e.target.value)} />
            </div>
               <div>
                <p>Phone</p>
                <input value={phone} className='w-full border rounded-lg  py-2 text-white' onChange={(e)=>setPhone(e.target.value)} />
            </div>
            <button className='bg-gray-500 test-white w-full rounded-lg py-2'>
         Submit
            </button>

        </form>
      
    </div>
  )
}

export default CreateUser
