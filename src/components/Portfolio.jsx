import React from 'react'
import TheTodo from "./TheTodo.png"
import ThePass from "./ThePass.png"
import TheChat from "./TheChat.png"
import TheWeb from "./My Website.png"

const Portfolio = () => {
  return (
    <>
      <div className='bg-[#101820] flex flex-col max-sm:gap-7 '>
        <div className="helloworld flex items-center mt-3 justify-center max-sm:h-[3vh] h-[15vh] bg-[#101820]">
          <div className="typewriter ">
            <h1 className='text-center max-sm:text-2xl text-2xl'>Welcome To Portfolio!</h1>
          </div>

        </div>
        <div className="made ">
          <h1 className='text-center mb-2 max-sm:text-2xl max-sm:mb-32  text-white text-3xl mt-2 '>What Have I Made?</h1>
        </div>
<div className='flex flex-col gap-6 max-sm:gap-y-64'>
        <div className="div1 w-[100vw] flex flex-row h-[50vh] justify-around max-sm:flex-col max-sm:gap-5 ">
          
          
          
          <div className='w-1/3 max-sm:w-full  bg-slate-700 h-full flex flex-col items-center justify-center gap-3 border-4 border-blue-700'>
          <img src={ThePass} className='w-full h-[40vh]' alt="" srcset="" />
          <h1 className='text-center text-white '>ThePass helps us to manage password with URL and Username. It help to save data in Local Storage</h1>
          </div>



          <div className='w-1/3 max-sm:w-full bg-slate-700 h-full flex flex-col items-center justify-center gap-3 border-4 border-emerald-600'>
          <img src={TheTodo} className='w-full' alt="" srcset="" />
          <h1 className='text-center text-white'>TheTodo helps us to manage those tasks to be done. It help to save task in Local Storage</h1>
          </div>
          
        </div>


        <div className="div1 w-[100vw] flex flex-row max-sm:flex-col h-[50vh] justify-around max-sm:gap-5">
        <div className='w-1/3 max-sm:w-full bg-slate-700 h-full flex flex-col items-center justify-center gap-3 border-4 border-violet-700'>
          <img src={TheChat} className='w-full h-[35vh]' alt="" srcset="" />
          <h1 className='text-center text-white'>TheChat helps us to manage chat with friends or Groups. I am Currently Working on this.</h1>
          </div>
          <div className='w-1/3 max-sm:w-full bg-slate-700 h-full flex flex-col items-center justify-center gap-3 border-4 border-yellow-600'>
          <img src={TheWeb} className='w-full' alt="" srcset="" />
          <h1 className='text-center text-white'>This Website is made in React Js for Frontend And Express As Backend</h1>
          </div>
          
        </div>
        </div>



      </div>



    </>)
}

export default Portfolio