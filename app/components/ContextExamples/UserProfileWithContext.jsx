'use client'

import {useUser } from '../../context/userContext'


const UserProfileWithContext = () => {
    const userData = useUser()
    if(!userData){
        return <div>.... Loading </div>
    }
  return (
    <div className='p-4 bg-gray-100 rounded-lg shadow-md max-w-xs mx-auto'>
        <h1 className='text-2xl mb-4'>{userData.name}</h1>
        <p className='text-lg'>Email: {userData.email}</p>

    </div>
  )
}

export default UserProfileWithContext