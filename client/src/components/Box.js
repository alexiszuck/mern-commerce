import { useState } from 'react'

function Box() {
  const [green, setGreen] = useState(true);

  const changeColor = () => {
    setGreen(prev => !prev);
  }

  return (
    <div className={`cursor-pointer p-5 hover:bg-gray-500 rounded-2xl ${green ? 'bg-green-300' : 'bg-red-300'}`} onClick={changeColor}>
      <h1 className="text-4xl font-poppins font-bold">
      adidas / Products. / Brand Shoes / Recommend / Customer Reviews
      </h1>
      <br />
      <h1 className="text-4xl font-bold">
      adidas / Products. / Brand Shoes / Recommend / Customer Reviews
      </h1>
    </div>
  )
}

export default Box