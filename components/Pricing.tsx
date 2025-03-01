import React from 'react'
import Vector from './Vector'
import Image from 'next/image'
import myImages from "../public/pricing.png"
import { CiHeart } from "react-icons/ci";


const Pricing = () => {
  return (
    <section className=' relative mt-20'>
    <div>
      {/* 1 */}
      <div className='p-4 flex justify-between  w-full font'>
        <p className='text-[80px]'>
        LATEST ITEMS
        </p>

        <Vector
        title='View all items'
        />
      </div>

    {/* 2 */}
      <div className=' w-full p-4 mt-2 flex gap-2 justify-center'>
      <figure className='border-3 border-white bg-white text-black rounded-[10px]'>
          <Image
          src={myImages}
          alt='pricing img'
          className='overflow-hidden rounded-t-[10px]'
          
          /> 
          <figcaption className='pl-5'>International Brand</figcaption>
          <figcaption className='pl-5 font-bold'>$20.50</figcaption>
          <figcaption className='pl-80 '>
          <CiHeart
          size={20}
          />
          </figcaption>
        </figure>

        <figure className='border-3 border-white bg-white text-black rounded-[10px]'>
          <Image
          src={myImages}
          alt='pricing img'
          className='overflow-hidden rounded-t-[10px]'
          
          /> 
          <figcaption className='pl-5'>International Brand</figcaption>
          <figcaption className='pl-5 font-bold'>$20.50</figcaption>
          <figcaption className='pl-80 '>
          <CiHeart
          size={20}
          />
          </figcaption>
        </figure>

        <figure className='border-3 border-white bg-white text-black rounded-[10px]'>
          <Image
          src={myImages}
          alt='pricing img'
          className='overflow-hidden rounded-t-[10px]'
          
          /> 
          <figcaption className='pl-5'>International Brand</figcaption>
          <figcaption className='pl-5 font-bold'>$20.50</figcaption>
          <figcaption className='pl-80 '>
          <CiHeart
          size={20}
          />
          </figcaption>
        </figure>

        <figure className='border-3 border-white bg-white text-black rounded-[10px]'>
          <Image
          src={myImages}
          alt='pricing img'
          className='overflow-hidden rounded-t-[10px]'
          
          /> 
          <figcaption className='pl-5'>International Brand</figcaption>
          <figcaption className='pl-5 font-bold'>$20.50</figcaption>
          <figcaption className='pl-80 '>
          <CiHeart
          size={20}
          />
          </figcaption>
        </figure>
      </div>
    </div>
    </section>
  )
}

export default Pricing