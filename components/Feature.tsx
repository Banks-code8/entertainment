import React from 'react'
import Vector from './Vector'
import Image from 'next/image'
import myImage from "../public/Rectangle 15.png"

const Feature = () => {
  return (
    <section className='mt-20 '>
        <div className=' relative p-4 w-full h-full bg-gradient-to-l from-[#D9D9D9] to-[#000000] '>
          <div className=' pr-[25rem] flex gap-10 justify-center'>
            {/* 1 */}
            <div className=' pl-30 justify-center'>
                <h1 className='text-[80px]'>
                  Hungryboiz Music Record
                </h1>

              <p className='regular mt-3 mr-15'>
              Sign up to receive alerts about new merchandise drops, 
              new music releases and exclusive VIP deals for concerts and meet and greets 
              Sign up to receive alerts about new merchandise drops, new music releases and exclusive VIP deals for concerts and meet and greets
              </p>

              <Vector
              title='Discover More'
              />
            </div>

            {/* 2 */}
            <div className='h-full w-full left-20 pt-[80px] '>
            <Image
            className='w-[273px] h-[331.5px]' 
            src={myImage}
            alt='feature img'
           
            />
            </div>

            {/* 3 */}
            <div className='absolute flex flex-col p-4 right-30 translate-y-[-5rem]' >
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