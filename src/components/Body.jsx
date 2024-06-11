import React from 'react'
import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import "./heading.css"
import "./Body.css" 
import logo from "./binod.jpg"

const Body = () => {
  useEffect(() => {
    const currentDate = new Date().toDateString();
    console.log(currentDate)
  
  }, [])
  return (

<>
<div className="helloworld flex items-center justify-center h-[15vh] max-sm:h-[9vh] w-[100vw] bg-[#101820]">
<div className="typewriter ">
        <h1 className='text-center text-4xl max-sm:text-xl  '>Hello World!</h1>
      </div>
</div>

    <div className='threedivs flex max-sm:flex-col   justify-center items-center bg-[#101820] h-[69vh] '>
    <div className='first max-sm:w-full flex  flex-col max-sm:gap-[-6px]  justify-center items-center w-1/3 text-white'>

            <h3 className='text-2xl font-bold mb-2 max-sm:text-xl' >Hey, This Is</h3>
            <h1 className='text-4xl max-sm:text-2xl max-sm:mt-[-6px] font-extrabold text-red-500'><span className='text-4xl text-green-500 max-sm:text-2xl max-sm:mt-[-6px] font-extrabold'>&lt;Binod</span> Sharma/&gt;</h1>
            <NavLink className={(e)=>{return e.isActive?"red":""}} to='/contact'><li className='text-normal list-none text-lg max-sm:text-sm'><button className=' border-2 text-yellow-500 max-sm:mt-1 mt-7  border-yellow-500 rounded-sm p-[3px] max-sm:p-[2px] max-sm:text-sm'>Contact Me</button></li></NavLink>
            
    </div>
    <div className='second max-sm:w-full flex items-center justify-center w-1/3'>
    
    <img className='w-[60vh] mb-10 max-sm:mb-2 flex bottom-0 max-sm:w-[27vh] items-center' src={logo} alt="" />
    </div> 


    <div className='third max-sm:w-full flex flex-col items-center w-1/3'>

    <div className="image">

    </div>
    <div className="img"></div>
    <h1 className='text-yellow-500 text-xl mb-3 underline max-sm:text-sm max-sm:mb-1'>Introduction</h1>
    <h1 className='text-3xl font-extrabold text-white max-sm:text-xl '> UI/UX Designer,</h1>
    <h1 className='text-3xl font-extrabold text-white  max-sm:text-xl' > Full Stack Developer</h1>
    
    <NavLink className={(e)=>{return e.isActive?"red":""}} to='/about'><li className='list-none text-normal text-lg max-sm:text-sm'><button className='text-yellow-500 text-sm mt-5 max-sm:mt-1 underline'>See More ↓</button></li></NavLink>

    
    </div>
    </div>
    <h1 className='text-center bg-[#101820] text-yellow-500 h-[7vh]'>The Earlier, The Best.   -Mark Zuckerberg</h1>
    </>

  )
}

export default Body