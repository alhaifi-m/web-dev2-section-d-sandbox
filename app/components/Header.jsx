import React from 'react'

const Header = ({headerText}) => {
  return (
    <div className="text-2xl font-semibold py-4 bg-gray-800 text-white w-full text-center">
      <h1 className="text-center text-2xl font-bold">{headerText || 'My Website'}</h1>
    </div>
  )
}

export default Header