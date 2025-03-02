import React from 'react'

import { FiInstagram } from 'react-icons/fi'
import { FaTiktok, FaXTwitter, FaYoutube } from 'react-icons/fa6'

const Footer = () => {
  return (
    <footer>
   <div className='regular mt-10 p-10'>
       {/* icons */}
    <div className='regular flex justify-start mt-5 pl-[20px] gap-5 '>
        <FiInstagram
        size={50}
        />
        <FaXTwitter
         size={50}
        />
        <FaYoutube
         size={50}
        />
        <FaTiktok
         size={50}
        />
    </div>

    <div className='flex w-full mt-5 pl-[20px] gap-5 '>
        <p>Private Policy</p>
        <p>Terms & Condition</p>

        
        <p className='pl-100'>@ 2024 HungryBoiz Global</p>
        
    </div>
   </div>
   /</footer>
  )
}

export default Footer