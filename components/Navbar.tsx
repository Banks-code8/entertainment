"use client";
import { useState } from "react";
import Image from 'next/image'
import React from 'react'
import Logo from "../public/logo_png.png"
import Link from 'next/link'
import { CiMenuFries } from "react-icons/ci";





const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  return  (
    <div className='relative'>
     
    <nav className='absolute z-10 flex justify-between items-center  
     md:max-w-full w-full  pt-4  bg-transparent'>
        {/*logo */}
        <Link href="/">
        <Image
        src={Logo}
        alt='logo'
        className=" w-[120px] px-2 md:w-[218px] md:h-[65px] xl:w-[418px] xl:h-[127px]"  
        />
        </Link>
        {/* Menu */}
        
         <ul className=" items-center justify-center cursor-pointer md:w-[764px] md:h-[65px] xl:w-[864px] xl:h-[95px]  md:flex hidden
         gap-10 shadow-[0_4px_4px] shadow-[#000000]/40   
         bg-gradient-to-r from-[#D9D9D9]/20 to-[#000000]/102  backdrop-blur-sm  
          ">
        
          <Link href="/"
          className="hover:underline hover:font-bold"
          >
            Home
          </Link>

          <Link href="/aboutpage"
          className="hover:underline hover:font-bold"
          >
            About Us
          </Link>

          <Link href="/"
          className="hover:underline hover:font-bold"
          >
            Artist
          </Link>

          <Link href="/blogpage"
          className="hover:underline hover:font-bold"
          >
            Blog
          </Link>

          <Link href="/"
          className="hover:underline hover:font-bold"
          >
            Shop
          </Link>

          <Link href="/contactpage"
          className="hover:underline hover:font-bold"
          >
            Contact Us
          </Link>
          

        <button className='border-2 border-white rounded-[10px]  w-[125px] h-[36px] hover:font-bold'>
            newsletter
        </button>


        

        </ul>

      {/* menu media responsive */}
       <div>

          <button 
          className="inline-block cursor-pointer md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <div>X</div> : <CiMenuFries size={22} />}
        </button>
          
          <div className={`${isOpen ? "block" : "hidden"}  lg:hidden mt-4 space-y-2 w-[10rem] justify-start bg-white/30`}>
          <Link href="/"
          className="block  hover:bg-gray-500/30">
            Home
          </Link>

          <Link href="/aboutpage" 
          className="block hover:bg-gray-500/30"
          >
            About Us
          </Link>

          <Link href="/"
          className="block  hover:bg-gray-500/30">
            Artist
          </Link>

          <Link href="/blogpage"
          className="block  hover:bg-gray-500/30">
            Blog
          </Link>

          <Link href="/"
          className="block  hover:bg-gray-500/30">
            Shop
          </Link>

          <Link href="/contactpage"
          className="block  hover:bg-gray-500/30">
            Contact Us
          </Link>
        </div>

          </div>
         
    </nav>
    </div>
  );
}
    
  

export default Navbar