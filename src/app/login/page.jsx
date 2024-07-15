"use client"
import { useState } from 'react'
import Input from '@/app/components/input'
import Link from 'next/link'
import { useRouter} from 'next/navigation'
import axios from 'axios'

const Login = () => {
    const DefaultData = {username:"",password:""}
    const [data,setData] = useState(DefaultData);

    const onValueChange = (e) => {
        setData({...data,[e.target.name]:e.target.value})
    }
    const router = useRouter();
    
    const onLogin = async (e) => {
        e.preventDefault();
        if(!data.username || !data.password){
            alert("please fill the form");
            return;
        }
        try{
          const Response = await axios.post('api/users/login',data);
          if(Response.status === 200){
            router.push('/home');
          }
        }
        catch(error){
          console.log(error);
        }
    }
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="bg-white px-16 pt-8 pb-12 mb-4 rounded-[20px]">
        <h1 className="text-3xl mb-4 text-center">Login</h1>
        <form action="">
            <Input label="user name" type="text" id="username" value={data.username} onChange={(e) => onValueChange(e)}/>
            <Input label="password" type="password" id="password" value={data.password} onChange={(e) => onValueChange(e)} />
            <button type="submit" className="bg-[#13131A] hover:bg-[#6c6c82] text-white px-4 py-2 rounded w-full" onClick = {(e)=>onLogin(e)}>Submit</button>
            <p className="mt-4 text-center ">don't have an account ? {""}
            <Link href="/register" className="text-blue-500 hover:underline">Register</Link>
            </p>
        </form>
      </div>
    </div>
  )
}

export default Login

