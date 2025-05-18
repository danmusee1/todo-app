
import CreateUser from '~/components/user-list/CreateUser'
import ListUsers from '~/components/user-list/ListUsers'
type Task ={
  id:number
  text:string
  done:boolean

}
const UserParent = () => {


  return (
    <div className='pt-20'>
 
      <div className='flex justify-center w-full pt-5'>
        <div className='space-y-4'>

     <div>
        <h1 className='text-white font-bold text-center'>Create  User</h1>
      <CreateUser/>
      <h1 className='text-white font-bold text-center'>List All users</h1>
      <ListUsers/>
     </div>
      </div>
        </div>
     
      

      
    </div>
  )
}

export default UserParent
