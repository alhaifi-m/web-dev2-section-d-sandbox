import React from 'react'
import Image from 'next/image'

const user={
  name: 'John Doe',
  email: 'john.doe@example.com',
  bio: "Web Developer and a Blogger.  Passionate about coding and sharing knowledge with others. In my free time, I enjoy hiking and photography.",
  avatar:'https://images.pexels.com/photos/35537/child-children-girl-happy.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
}


const Profile = () => {
  return (
    <div className="flex items-center spax-x-16 mt-8">
        <Image
          src={user.avatar}
          alt="User Avatar"
          width={100}
          height={100}
          className="mr-10 w-24 h-24 rounded-full  border-gray-600"
        />
        <div>
            <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
            <p className='text-gray-500'>{user.email}</p>
            <p className='text-gray-600 mt-2'>{user.bio}</p>
        </div>


    </div>
  )
}

export default Profile