"use client"
import { useState } from 'react'
import Input from '@/app/components/input'
import Link from 'next/link'
import { useRouter} from 'next/navigation'
import axios from 'axios'

const Register = () => {
    const DefaultData = {name:"",username:"",password:""}
    const [data,setData] = useState(DefaultData);
    const onValueChange = (e) => {
        setData({...data,[e.target.name]:e.target.value})
    }
   
    const router = useRouter();
    const onRegister = async (e) => {
        e.preventDefault();
        if(!data.name || !data.username || !data.password){
            alert("Enter all the fields");
            return;
        }
        try{
          const Response = await axios.post('api/users/register',data);
          if(Response.status === 200){
            router.push('/login');
          }
        }
        catch(error){
          console.log(error);
        }
    }
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="bg-white px-16 pt-8 pb-12 mb-4 rounded-[20px] shadow-inner drop-shadow-2xl">
        <h1 className="text-3xl mb-4 text-center">Register</h1>
        <form action="">
            <Input label="name" type="text" id="name" value={data.name}  onChange={(e) => onValueChange(e)} />
            <Input label="user name" type="text" id="username" value={data.username} onChange={(e) => onValueChange(e)}/>
            <Input label="password" type="password" id="password" value={data.password} onChange={(e) => onValueChange(e)} />
            <button type="submit" className="bg-[#13131A] hover:bg-[#6c6c82] text-white px-4 py-2 rounded w-full" onClick = {(e)=>onRegister(e)}>Submit</button>
            <p className="mt-4 text-center ">Already have an account {""}
            <a href="/login" className="text-blue-500 hover:underline">login</a>
            </p>
        </form>
      </div>
    </div>
  )
}

export default Register

