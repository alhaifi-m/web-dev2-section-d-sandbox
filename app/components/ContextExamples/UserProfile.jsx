'use client'
import React from 'react'
import { useState, useEffect } from 'react'

const UserProfile = ({userId}) => {
    const [userData, setUserData] = useState(null)

    useEffect(()=>{
        const fetchUserData = async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            const result = await response.json()
            console.log(result)
            setUserData(result)
        }
        fetchUserData()
    }, [userId])


    if(!userData) {
        return <div>Loading...</div>
    }
  return (

    <div className="p-4 bg-gray-100 rounded-lg shadow-md max-w-xs mx-auto ">
      <h1 className='text-2xl mb-4'>{userData.name}</h1>
      <p className='text-lg'>Email: {userData.email}</p>

    </div>
  )
}

export default UserProfile