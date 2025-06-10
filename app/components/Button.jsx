'use client'

const Button = ({alertText, buttonLabel}) => {
    const handleClick = () => {
        alert(alertText);
    }
    
  return (
<button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300" onClick={handleClick}>
    {buttonLabel || 'Click Me'}
</button>
  )
}

export default Button