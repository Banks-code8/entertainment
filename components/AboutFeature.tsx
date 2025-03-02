import Image from 'next/image'
import React from 'react'
import myImage from "../public/feature_img1.png"
import { FaGlobeAfrica } from "react-icons/fa";
import { FaMusic } from "react-icons/fa6";



const AboutFeature = () => {
  return (
    <section className='mt-10 p-10'>
    <div className='flex mt-10 w-[1238px]  gap-5 '>
        {/* image */}
        <Image
        src={myImage}
        alt='aboutFeature img1'
        className='w-[401px] h-[488px]'
        
        />

        <div className='relative text-white mx-[70px] items-center'>
           <div>
           <p className='text-[80px] text-[#D9D9D9CC]'>
           Entertainment at its Finest
           </p>
           </div>

           <div className='mt-5 mr-[250px]'>
           <p>
           Hungryboiz's taste for delivering the utmost value, has
            inspired the company's expansion into the fastest growing
            entertainment brand
            across the continent.
           </p>
           </div>

           <div className='flex gap-20 mt-10'>
            <figure>
            <p className='text-[40px] font-bold text-center'> 
                +6
             </p>
            <figcaption className='text center'>Artists</figcaption>
        </figure>

        <figure>
        <p className='text-[40px] font-bold text center'> 
            +4
         </p>
            <figcaption className='text center'>Albulm</figcaption>
        </figure>
            </div> 
        </div>
        
    </div>

    <div className='flex mt-20 w-[1238px] h-[488px] gap-5 '>
    <div className='relative mx-[40px] '>
           <div>
                <p className='text-[80px] text-[#D9D9D9CC]'>
                Creating Exceptional Music
                </p>
                </div>

                <div className='mr-[300px]'>
                <p className='mt-5'>
                Hungryboiz's is a music label dedicated to producing and
                promoting exceptional music that speaks to the soul. We are
                passionate about music and strive to create an environment
                where artists can flourish.
                </p>
               </div>

           <div className='flex gap-20 mt-10'>
                <FaGlobeAfrica
                size={50}
                />
       
              <FaMusic 
                size={50}
                />
            </div> 
        </div>
        
        {/* image */}
        <Image
        src={myImage}
        alt='aboutFeature img1'
        className='w-[401px] h-[488px]'
        
        />

       
        
    </div>
</section>
  )
}

export default AboutFeature