import Image from 'next/image'
import React from 'react'
import myImage from "../public/feature_img1.png"
import { FaGlobeAfrica } from "react-icons/fa";
import { FaMusic } from "react-icons/fa6";



const AboutFeature = () => {
  return (
    <section className='container py-12 px-6 mx-auto'>
        <div className='grid grid-cols-1 xl:grid-cols-2 xl:flex xl:flex-col gap-20'>
          
          <div>
            <div className='xl:flex '>
                <div className='w-full justify-center '>
                    <Image
                    src={myImage}
                    alt='aboutFeature img1'
                    className='w-full  md:w-full xl:w-[401px] xl:h-[488px]'
                    />
                </div>
                
                
                <div className='relative  flex flex-col gap-5'>
                    <div>
                        <h1 className='text-3xl md:text-[80px] lg:text-[80px] text-[#D9D9D9CC]'>
                        Entertainment at its Finest
                        </h1>
                    </div>

                    <div>
                        <p className=' xl:mr-[70px]'>
                        Hungryboiz's taste for delivering the utmost value, has
                        inspired the company's expansion into the fastest growing
                        entertainment brand
                        across the continent.
                        </p>
                    </div>

                    <div className='flex gap-20'>
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
            </div>
         
            <div>
            <div className='relative  xl:flex justify-center '>
                <div className='flex flex-col w-full gap-10 '>
                    <div>
                        <h1 className='text-3xl xl:mr-20 md:text-[80px] lg:text-[80px] text-[#D9D9D9CC]'>
                        Creating Exceptional Music
                        </h1>
                    </div>

                    <div>
                        <p className=' xl:mr-[20rem]'>
                        Hungryboiz's is a music label dedicated to producing and promoting 
                        exceptional music that speaks to the soul. 
                        We are passionate about music and strive to 
                        create an environment where artists can flourish.
                        </p>
                    </div>

                    <div className='flex gap-20'>
                        <FaGlobeAfrica
                        size={50}
                        />
                
                        <FaMusic 
                        size={50}
                        />
                    </div>
                    </div> 
                     
            
                    {/* image */}
                    <div className='mt-5'>
                        <div className='w-full'>
                            <Image
                            src={myImage}
                            alt='aboutFeature img1'
                            className='w-full  md:w-full xl:w-[601px] xl:h-[488px]'       
                            />
                        </div>
                    </div>
                </div>
            </div>  
         </div>
            
</section>
  )
}

export default AboutFeature
