import React from 'react'
import { useRef, useEffect } from 'react';
import ReactDOM from 'react-dom'
import { useState } from 'react';
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const Contact = () => {
  

  let userRef = useRef()
  let emailRef = useRef()
  let textRef = useRef()

  const [message, setmessage] = useState({ username: "", email: "", text: "" })


  const handleChange = (e) => {
    setmessage({ ...message, [e.target.name]: e.target.value })
  }

  const handleSubmit = async() => {

    if(userRef.current.value.length<3||emailRef.current.value.length<3||textRef.current.value.length<3){

    toast.error('Must Contain More Than 4 Characters', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });}
    else{
      toast.success('Message Sent Successfully!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      
      })
      await fetch("http://localhost:3000/", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...message,}) })

    userRef.current.value = ""
    emailRef.current.value = ""
    textRef.current.value = ""
  }}


  return (
    
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
      <div className="helloworld flex items-center justify-center h-[15vh] max-sm:h-[10vh] max-sm:text-sm bg-[#101820]">
        <div className="typewriter ">
          <h1 className='text-center text-3xl max-sm:text-xl '>Wanna Contact?</h1>
        </div>

      </div>

      <div className="contactsection max-sm:gap-5 text-white h-[76vh] bg-[#101820] flex flex-row max-sm:flex-col justify-center items-center  ">

        <div className="socialmedias gap-6 w-1/2 flex flex-col justify-center items-center max-sm:w-full">
          <h1 className='text-3xl font-bold max-sm:text-lg'>Contact Via Social Media</h1>
          <div className="buttons flex flex-col gap-5 max-sm:gap-1 max-sm:text-sm">
            <a href='https://www.facebook.com/profile.php?id=100072540954373 ' target='_blank'><div className='flex flex-row gap-3'><button className='scale-150'><FaFacebook /></button><h1 className='text-center text-blue-500'>Binod Sharma</h1></div></a>
            <a href='https://www.instagram.com/the_b1nod/'><div className='flex flex-row gap-3'><button className='scale-150'><IoLogoInstagram /></button><h1 className='text-center text-[#cb2b61]'>the_binod</h1></div></a>
            <a href='' target='_blank'><div className='flex flex-row gap-3'><button className='scale-150'><FaLinkedin /></button><h1 className='text-center text-blue-600'>Binod Sharma</h1></div></a>
            <a href='' target='_blank'><div className='flex flex-row gap-3'><button className='scale-150'><FaXTwitter /></button><h1 className='text-center text-gray-500'>TheBinod</h1></div></a>
            <a href='' target='_blank'><div className='flex flex-row gap-3'><button className='scale-150'><SiGmail /></button><h1 className='text-center text-green-500'>thebinod404@gmail.com</h1></div></a>





          </div>
        </div>
        <div className="message w-1/2 max-sm:w-full flex justify-center items-center gap-3 flex-col max-sm:gap-1 ">
          <h1 className='text-3xl font-bold max-sm:text-lg '>Message Me</h1>
          <div className="inputs m max-sm:gap-2   flex-col gap-4 flex items-center">
            <input ref={userRef} className='text-black max-sm:w-full rounded-md text-center w-[30vw]' onChange={handleChange} type="text" name="username" id="" placeholder='Enter Your Name.' />
            <input ref={emailRef} className='text-black max-sm:w-full rounded-md text-center w-[30vw]' onChange={handleChange} type="email" name="email" id="" placeholder='Enter Your Email' />
            <input ref={textRef} className='text-black max-sm:w-full max-sm:h-[10vh] rounded-md text-wrap text-center w-[30vw] h-[20vh] ' onChange={handleChange} type="text" name="text" id="" placeholder='Message' />
            <button className='bg-yellow-500 text-[#101820] rounded-sm w-[10vw] max-sm:w-1/2' onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact