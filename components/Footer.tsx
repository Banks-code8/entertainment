import React from 'react'

import { FiInstagram } from 'react-icons/fi'
import { FaTiktok, FaXTwitter, FaYoutube } from 'react-icons/fa6'

const Footer = () => {
  return (
    <footer className='container py-12 px-6'>
        <div className='flex flex-col gap-5'>
            {/* icons */}
            <div className='flex justify-start pl-[20px] gap-5 '>
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

            <div className='flex w-full pl-[20px] gap-5 '>
                <p>Private Policy</p>
                <p>Terms & Condition</p>
                <p className='xl:pl-100'>@ 2024 HungryBoiz Global</p>    
            </div>
        </div>
   </footer>
  )
}

export default Footer