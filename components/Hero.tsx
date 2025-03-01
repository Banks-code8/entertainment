import Image from 'next/image'
import React from 'react'
import myImage from "../public/bg-img.png"

const Hero = () => {
  return (
    <section className='relative w-full overflow-hidden '>

    <div className='relative '>
    <Image className='w-full h-full bg-cover bottom-20'
    src={myImage}
    alt='bg_img'
    width={1440}
    height={916}
    />
    </div>

</section>
  )
}

export default Hero