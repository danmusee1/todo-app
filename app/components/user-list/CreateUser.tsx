import  { FormDatSchemaRegester } from 'lib/zod-schemas/regesterSchema'
import React, { useState } from 'react'
import {useForm} from 'react-hook-form'
import toast from "react-hot-toast";
import { zodResolver } from '@hookform/resolvers/zod';
import {z} from 'zod'
import { httpsService } from 'services/https.service';
import { useNavigate } from 'react-router';
type Inputs= z.infer<typeof FormDatSchemaRegester>
const CreateUser = () => {
    const [name,setName] =useState('')
    const [email,setEmail]=useState('')
    const [phone,setPhone]=useState('')
      const service = new httpsService();
  const navigate =useNavigate()
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState : {errors}
  } = useForm<Inputs>({
    resolver:zodResolver(FormDatSchemaRegester),
    /* defaultValues:{
     name:'User_Profile',
    } */
  })
    const registerUser = async (registrationDetails:Inputs,session:any)=>{
      console.log("registration details",registrationDetails )
            const results = await service.post(registrationDetails, 'user/register', session);
            if (results.response.code === 200) {
               toast.success("Registration success");
        navigate('/log-in'); // Redirect to a success page if needed
        reset();
            }else{
              toast.error(results.response.message)
            }
             }
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
        <form onSubmit={handleSubmit(registerUser)} className='space-y-2'>
            <div>
                <p>First Name</p>
               {/*  <input value={name} className='w-full border rounded-lg  py-2 text-white' onChange={(e)=>setName(e.target.value)} /> */}
                <input type="text" className='w-full border rounded-lg  py-2 text-white' placeholder='firstName' 
                {...register('firstName')}
                />
                 {errors.firstName?.message &&(
                      <p className='text-sm text-red-400'>{errors?.firstName?.message}</p>
                )}
            </div>
             <div>
                <p>MiddleName</p>
               {/*  <input value={name} className='w-full border rounded-lg  py-2 text-white' onChange={(e)=>setName(e.target.value)} /> */}
                <input type="text" className='w-full border rounded-lg  py-2 text-white' placeholder='Middle Name' 
                {...register('middleName')}
                />
                 {errors.middleName?.message &&(
                      <p className='text-sm text-red-400'>{errors?.middleName?.message}</p>
                )}
            </div>
             <div>
                <p>last Name</p>
               {/*  <input value={name} className='w-full border rounded-lg  py-2 text-white' onChange={(e)=>setName(e.target.value)} /> */}
                <input type="text" className='w-full border rounded-lg  py-2 text-white'  placeholder='last Name' 
                {...register('lastName')}
                />
                 {errors.lastName?.message &&(
                      <p className='text-sm text-red-400'>{errors?.lastName?.message}</p>
                )}
            </div>
              <div>
                <p>Email</p>
                {/* <input value={email} className='w-full border rounded-lg  py-2 text-white' onChange={(e)=>setEmail(e.target.value)} /> */}
                 <input type="email" className='w-full border rounded-lg  py-2 text-white'  placeholder='email' 
                {...register('email')}
                />
                 {errors.email?.message &&(
                      <p className='text-sm text-red-400'>{errors?.email?.message}</p>
                )}
            </div>
               <div>
                <p>Phone</p>
                {/* <input value={phone} className='w-full border rounded-lg  py-2 text-white' onChange={(e)=>setPhone(e.target.value)} /> */}
                  <input type="text" className='w-full border rounded-lg  py-2 text-white'  placeholder='Phone number' 
                {...register('phoneNumber')}
                />
                 {errors.phoneNumber?.message &&(
                      <p className='text-sm text-red-400'>{errors?.phoneNumber?.message}</p>
                )}
            </div>
             <div>
                <p>address</p>
                {/* <input value={phone} className='w-full border rounded-lg  py-2 text-white' onChange={(e)=>setPhone(e.target.value)} /> */}
                  <input type="text" className='w-full border rounded-lg  py-2 text-white'  placeholder='Address' 
                {...register('address')}
                />
                 {errors.address?.message &&(
                      <p className='text-sm text-red-400'>{errors?.address?.message}</p>
                )}
            </div>
             <div>
                <p>password</p>
                {/* <input value={phone} className='w-full border rounded-lg  py-2 text-white' onChange={(e)=>setPhone(e.target.value)} /> */}
                  <input type="password" className='w-full border rounded-lg  py-2 text-white'  placeholder='Password' 
                {...register('password')}
                />
                 {errors.password?.message &&(
                      <p className='text-sm text-red-400'>{errors?.password?.message}</p>
                )}
            </div>
            <div>
                <p>passwordConfirm</p>
                {/* <input value={phone} className='w-full border rounded-lg  py-2 text-white' onChange={(e)=>setPhone(e.target.value)} /> */}
                  <input type="password" className='w-full border rounded-lg  py-2 text-white' placeholder='Confirm Password' 
                {...register('passwordConfirm')}
                />
                 {errors.passwordConfirm?.message &&(
                      <p className='text-sm text-red-400'>{errors?.passwordConfirm?.message}</p>
                )}
            </div>
             <button
                            type="submit"
                            className="p-2 bg-blue-500 text-white rounded-md hover:bg-pink-700 transition duration-300 w-full py-4 cursor-pointer"
                        >
                            Save
                        </button>
        </form>
      
    </div>
  )
}

export default CreateUser
