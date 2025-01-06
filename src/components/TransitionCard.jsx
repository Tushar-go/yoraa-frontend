import React from 'react'

const TransitionCard = ({source,btnName}) => {
  return (
    <div className="relative">
            <div className="mb-2 w-[450px] object-cover rounded-xl overflow-hidden  bg-no-repeat">
              <img
                className=" w-full  transition duration-500 ease-in-out hover:scale-110"
                src={source}
                alt=""
              />
            </div>
            <button className="absolute bottom-8 left-1/2 transform -translate-x-1/2 px-16 py-4 text-black text-xs bg-white rounded-3xl shadow-md">
             {btnName}
            </button>
          </div>
  )
}

export default TransitionCard