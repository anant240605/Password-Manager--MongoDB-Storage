import React from 'react'

const Navbar = () => {
  return (
    
     <nav className='bg-slate-800 text-white '>
        <div className="mycontainer flex items-center justify-around px-4 h-14 py-5">
        <div className="logo font-bold text-2xl ">

          <span className='text-green-500'>&lt;</span>
            Pass
           <span className='text-green-500'>OP&gt;</span>

        </div>
        {/* <ul>
            <li className='flex gap-5'>
                 <a  className='hover:font-bold' href="/" target="_blank">Home</a>
                <a  className='hover:font-bold'href="/" target="_blank">About</a>
                <a className='hover:font-bold' href="/" target="_blank">Contact</a>
               
            </li>
        </ul> */}

        
        <button className='text-white bg-green-700 my-5 mx-2 w-25 rounded-full flex items-center'>
           <a target='_blank' href="https://github.com/anant240605">
         <img className=' invert w-10 p-1' src="Github.svg" alt="Github" />
           
         </a>
      <a target='_blank' href="https://github.com/anant240605">
        <span>Github</span>
      </a>
        </button>
        </div>
     </nav>
            

  )
}

export default Navbar
