import React from 'react'
import { BiChevronDown, BiSearch, } from "react-icons/bi"


function NavSm() {
  return (
    <>
      <div className='text-white flex items-center justify-between'>
        <div>
          <h3 className='text-xl font-bold'>It All Starts Here!!</h3>
          <span className='text-gray-400 text-xs flex items-center cursor-pointer hover:text-white'>Bhopal <BiChevronDown /> </span>
        </div>
        <div className='w-8 h-8'>
          <button>Use App</button>
          <BiSearch className='w-full h-full' />
        </div>
      </div>
    </>
  )
}

function NavMd() {
  return (
    <>
      <div className='w-20 h-10'>
        <img src='https://cdn.hashnode.com/res/hashnode/image/upload/v1639847408308/3mcVJimCw.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp' alt='' className='w-full h-full' />
      </div>
      <div className='w-full items-center gap-3 bg-white px-3 py-1 rounded-md'>
        <BiSearch />
        <input type='search' className='w-full bg-transparent border-none focus:outline-none' />
      </div>
    </>
  )
}

function NavLg() {
  return (
    <>
      <div className='container flex mx-auto px-9 items-center justify-content '>
        <div className='flex items-center w-1/2 gap-3 '>
          <div className='w-60  h-10'>
            <img src='https://cdn.hashnode.com/res/hashnode/image/upload/v1639847408308/3mcVJimCw.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp' alt='' className='w-full h-full' />
          </div>
          <div className='w-full flex items-center gap-3 ml-10 bg-white px-3 py-1 rounded-md'>
            <BiSearch />
            <input type='search' className='w-full bg-transparent border-none focus: outline-none'
              placeholder="Search for movies, events, plays, sports and activities" />
          </div>

        </div>
        
      </div>
    </>
  )
}


// Main Component
const Navbar = () => {
  return (
    <>
      <nav className='bg-darkBackground-700 px-4 py-3'>
        {/* Small Screen NavBar */}
        <div className='md:hidden '>
          <NavSm />
        </div>

        {/* Medium Screen Size */}
        <div className='hidden lg:hidden md:flex'>
          <NavMd />
        </div>

        {/* Large Screen Size */}
        <div className='hidden md:hidden lg:flex'>
          <NavLg />
        </div>
      </nav>
    </>
  )
}


export default Navbar