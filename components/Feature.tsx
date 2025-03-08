import React from 'react'
import Vector from './Vector'
import Image from 'next/image'
import myImage from "../public/Rectangle 15.png"

const Feature = () => {
  return (
    <section className='py-12 '>
        <div className=' container px-6 relative p-10 max-w-full bg-gradient-to-l from-[#D9D9D9] to-[#000000] '>
          <div className=' grid grid-col-1 lg:grid-col-2 lg:flex gap-10 justify-center'>
            
            <div className='flex flex-col gap-5 w-full'>
              <div className='xl:mr-80'>
                <h1 className='text-6xl'>
                  Hungryboiz Music Record
                </h1>
              </div>

              <div className='xl:mr-40'>
                <p>
                Sign up to receive alerts about new merchandise drops, 
                new music releases and exclusive VIP deals for concerts and meet and greets 
                Sign up to receive alerts about new merchandise drops, new music releases and exclusive VIP deals for concerts and meet and greets
                </p>
              </div>

              <Vector
              title='Discover More'
              />
            </div>

            {/* 2 */}
            <div className='w-full items-center justify-center'>
              <Image
              className='w-full h-full xl:w-[300px] xl:h-[400px]' 
              src={myImage}
              alt='feature img'
              />
            </div>

            {/* 3 */}
            <div className='hidden absolute xl:flex xl:flex-col p-4 right-20 translate-y-[-7rem]' >
            <Image
            className='w-[216.52px] h-[296.71px]' 
            src={myImage}
            alt='feature img'
            />

            <Image
            className='w-[216.52px] h-[296.71px]'  
            src={myImage}
            alt='feature img'
            />
            </div>

          </div>
        </div>
    </section>
  )
}

export default Feature