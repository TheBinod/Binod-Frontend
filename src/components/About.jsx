import React from 'react'

const About = () => {
  return (
    <>
    <div className='bg-[#101820] h-[91vh] '>
    <div className="helloworld flex items-center justify-center flex-col h-[9vh] bg-[#101820]">
         <div className="typewriter ">
        <h1 className='text-center text-xl '>Its All About Binod!</h1>
         </div>
      </div>
      <div className="aboutme max-sm:text-[15px]  bg-[#101820] text-white mb-1 ">
        <h1 className='text-center text-sm '>Hello! I'm <span className='font-bold text-green-600 text-center'>Binod Sharma</span>, a web developer from Nepal. I specialize in creating dynamic and beautiful web pages.</h1>
      </div>
      <div className="skills bg-[#101820] text-white flex flex-col justify-center items-center mt-7 text-3xl max-sm:mt-3">
          <h1 className='text-center mb-2 max-sm:text-2xl '>What am I great at?</h1>
          <div className="skill flex justify-around max-sm:flex-col max-sm:gap-12  max-sm:justify-center max-sm:item-center">
<hr></hr>

            <div className='h-[50vh] w-1/3 max-sm:w-full flex flex-col  items-center border-r-2 max-sm:border-r-0 '> 
              <h1 className='font-medium text-2xl text-yellow-500 mb-3'>UI Design</h1>
              <img className='w-56' src="https://cdn.sanity.io/images/599r6htc/regionalized/121b95a7cd65588fe63417d7b87a474035f0ec83-1080x541.png?w=1200&q=70&fit=max&auto=format" alt=""   />
              <h1 className='text-rose-400'>React Js || Next js</h1>
              <h1 className='text-rose-400'>Javascript || Tailwind Css</h1>
              <h1 className='text-sm text-center' >"User interface design considers the overall look and feel of digital product</h1>

              </div>
           
           <hr></hr>
            <div className='h-[50vh] w-1/3 max-sm:w-full flex flex-col  items-center border-r-2 max-sm:border-r-0 '>
              <h1 className='font-medium text-2xl text-yellow-500 mb-3'>Backend</h1>
              <img className='w-56' src="https://www.applify.com.sg/blog/wp-content/uploads/2023/08/What-is-Backend-in-Web-Development.png" alt=""  />
              <h1 className='text-cyan-400'>Node Js || Express js</h1>
              <h1 className='text-cyan-400'>Mongo DB</h1>
              <h1 className='text-sm text-center'>The backend is the data and infrastructure that make your application work and User Cannot See it.</h1>
              
            </div>
<hr></hr>

            <div className='h-[50vh] w-1/3 max-sm:w-full flex flex-col  items-center border-r-2 max-sm:border-r-0 '>
              <h1  className='font-medium text-2xl text-yellow-500 mb-3'>DSA</h1>
              <img className='w-56' src="https://media.licdn.com/dms/image/D4D12AQF5GiLA7L7gWA/article-cover_image-shrink_600_2000/0/1684559947493?e=2147483647&v=beta&t=G6iVs7nJ9ZyTHQTYaNb7vkZ6eRPBb3IywkIXVptoBEA" alt=""   />
              <h1 className='text-green-500'>Java</h1>
              
            <h1 className='text-green-500'>C</h1>
            <h1 className='text-sm text-center'>DSA is about finding efficient ways to store and retrieve data, to perform operations on data, and to solve specific problems.</h1>
            </div>
            
          </div>
          <button className='text-center text-sm mt-8  px-2 py-1 border rounded-xl bg-red-600 max-sm:mt-12 '>Look At My Projects &rarr;</button>

      </div>
      </div>
</>
  )
}

export default About