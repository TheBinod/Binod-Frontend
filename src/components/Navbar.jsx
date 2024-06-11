import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"
import { RouterProvider, createBrowserRouter } from 'react-router-dom'


const Navbar = () => {
  return (
<>
                        
<div className="dropdown max-sm:flex hidden">
<ul className='flex gap-4  justify-center w-[100vw] bg-[#101820] text-white items-center h-[8vh] border-b-2 border-x-zinc-200'>

<NavLink className={(e)=>{return e.isActive?"red":""}} to='/'><li><h1 className='text-normal text-lg max-sm:text-sm'>Home</h1></li></NavLink>
<NavLink className={(e)=>{return e.isActive?"red":""}} to='/about'><li className='text-normal text-lg max-sm:text-sm'>About</li></NavLink>
<NavLink className={(e)=>{return e.isActive?"red":""}} to='/contact'><li className='text-normal text-lg max-sm:text-sm'>Contact</li></NavLink>
<NavLink className={(e)=>{return e.isActive?"red":""}} to='/portfolio'><li className='text-normal text-lg max-sm:text-sm'>Portfolio</li></NavLink>
<NavLink className={(e)=>{return e.isActive?"red":""}} to='/blog'><li className='text-normal text-lg max-sm:text-sm'>Blogs</li></NavLink>

</ul>
</div>
<div className='max-sm:hidden '>

    <div className="main flex items-center justify-around w-[100vw] bg-gray-300 h-[9vh] max-sm:h-[12vh] font-medium text-black ">
      <h1 className='text-normal text-lg max-sm:text-sm'>&lt;/&gt; The Binod</h1>
      <ul className='flex gap-10 max-sm:gap-3 '>

        <NavLink className={(e)=>{return e.isActive?"red":""}} to='/'><li className='text-normal text-lg max-sm:text-sm'>Home</li></NavLink>
        <NavLink className={(e)=>{return e.isActive?"red":""}} to='/about'><li className='text-normal text-lg max-sm:text-sm'>About</li></NavLink>
        <NavLink  className={(e)=>{return e.isActive?"red":""}}to='/contact'><li className='text-normal text-lg max-sm:text-sm'>Contact</li></NavLink>
        <NavLink  className={(e)=>{return e.isActive?"red":""}}to='/portfolio'><li className='text-normal text-lg max-sm:text-sm'>Portfolio</li></NavLink>
        <NavLink  className={(e)=>{return e.isActive?"red":""}}to='/blog'><li className='text-normal text-lg max-sm:text-sm'>Blog</li></NavLink>
      </ul>
      

    </div>
    </div>
    </>
  )
}

export default Navbar