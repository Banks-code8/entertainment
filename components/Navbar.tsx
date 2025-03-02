import Image from 'next/image'
import React from 'react'
import Logo from "../public/logo_png.png"
import Link from 'next/link'


const Navbar = () => {
  return (
    <div className='relative'>
    <nav className='absolute z-10 flex  justify-between items-center w-full pl-6 pt-8 
    bg-transparent'>
        {/*logo */}
        <Link href="/">
        <Image
        src={Logo}
        alt='logo'
        width={418}
        height={127}
        />
        </Link>
        {/* Menu */}
         <ul className="  p-4 items-center w-[864px] h-[95px]
         gap-12 shadow-[0_4px_4px] shadow-[#000000]/40 flex justify-center 
         bg-gradient-to-r from-[#D9D9D9]/20 to-[#000000]/102  backdrop-blur-sm  
          ">
        
          <Link href="/">
            Home
          </Link>

          <Link href="/aboutpage">
            About Us
          </Link>

          <Link href="/">
            Artist
          </Link>

          <Link href="/blogpage">
            Blog
          </Link>

          <Link href="/">
            Shop
          </Link>

          <Link href="/contactpage">
            Contact Us
          </Link>
          

        <button className='border-2 border-white rounded-[10px]  w-[125px] h-[36px]'>
            newsletter
        </button>
        </ul>
    
    </nav>
    </div>
  )
}

export default Navbar