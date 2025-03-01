import Image from 'next/image'
import React from 'react'
import myImage from "../public/feature_img1.png"

const AboutFeature = () => {
  return (
    <section className='mt-50 p-10'>
    <div className='flex mt-10 w-[1238px]  gap-5 '>
        {/* image */}
        <Image
        src={myImage}
        alt='aboutFeature img1'
        className='w-[401px] h-[488px]'
        
        />

        <div className='relative text-white mx-[70px] items-center'>
           <div>
           <p className='text-[80px] text-gray-500'>
           Entertainment at its Finest
           </p>
           </div>

           <div className='mt-10 mr-[250px]'>
           <p>
           Hungryboiz's taste for delivering the utmost value, has
            inspired the company's expansion into the fastest growing
            entertainment brand
            across the continent.
           </p>
           </div>

           <div className='flex gap-5 mt-10'>
            <figure>
                <p> +6 </p>
            <figcaption>Artists</figcaption>
        </figure>

        <figure>
            <p> +6 </p>
            <figcaption>Albulm</figcaption>
        </figure>
            </div> 
        </div>
        
    </div>

    <div className='flex mt-10 w-[1238px] h-[488px] gap-5 '>
    <div className='relative mx-[40px] '>
           <div>
                <p className='text-[80px]  text-gray-500'>
                Creating Exceptional Music
                </p>
                </div>

                <div className='mr-[300px]'>
                <p className='mt-10'>
                Hungryboiz's is a music label dedicated to producing and
                promoting exceptional music that speaks to the soul. We are
                passionate about music and strive to create an environment
                where artists can flourish.
                </p>
               </div>

           <div className='flex gap-10 mt-10'>
            <figure>
                <p className='text-[40px] font-bold'> +6 </p>
                <figcaption>Artists</figcaption>
            </figure>

            <figure>
                <p className='text-[40px] font-bold'> +6 </p>
                <figcaption>Albulm</figcaption>
            </figure>
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