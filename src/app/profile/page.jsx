"use client"
import axios from 'axios'
import Link from 'next/link';
import { useRouter } from 'next/navigation'

const Profile = () => {
    const router = useRouter();

    const onLogout = async () => {
      const response = await axios.get('api/users/logout');
      if(response.status === 200){
        router.push('/home');
      }
    }
    
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white px-16 pt-8 pb-12 mb-4">
        <h1 className="text-3xl mb-4 text-center">Home Page</h1>
        <p className="mt-4 text-center ">welcome to yout Profile page <br /> you can view your and manage your account informations</p>
        <Link href="/home">
        <button type="submit" className="bg-red-500 mt-4 hover:bg-blue-800 text-white px-4 py-2 rounded w-full" >Coffee ..</button>
        </Link>
        <button type="submit" className="bg-red-500 mt-4 hover:bg-blue-800 text-white px-4 py-2 rounded w-full" onClick = {(e)=>onLogout(e)}>Logout</button>
      </div>
    </div>
  )
}

export default Profile

