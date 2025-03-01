import Image from 'next/image'
import React from 'react'
import Logo from "../public/logo_png.png"
import Link from 'next/link'


const Navbar = () => {
  return (
    <div  >
    <nav className='absolute z-10 flex  justify-between items-center w-full pl-6 pt-8 bg-transparent'>
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
         <ul className="  p-4 items-center w-[864px] h-[95px] bg-transparent 
         gap-12 shadow-lg shadow-[#000000] flex justify-center">
        
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
          

        <button className='border-2 border-white rounded-[10px] p-4 '>
            newsletter
        </button>
        </ul>
    
    </nav>
    </div>
  )
}

export default Navbar