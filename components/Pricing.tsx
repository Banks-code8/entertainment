import React from 'react'
import Vector from './Vector'
import Image from 'next/image'
import myImages from "../public/pricing.png"
import { CiHeart } from "react-icons/ci";


const Pricing = () => {
  return (
    <section className='container mt-10 mx-auto py-12 px-6'>
    <div className='grid grid-cols-1 xl:grid-cols-2 w-full xl:flex xl:flex-col gap-5'>
      {/* 1 */}
      <div className='xl:flex justify-between'>
        <h1 className='text-[80px]'>
        LATEST ITEMS
        </h1>

        <Vector
        title='View all items'
        />
      </div>

    {/* 2 */}
      <div className='grid grid-cols-2 w-full mt-2 lg:grid-cols-4 gap-2 '>
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