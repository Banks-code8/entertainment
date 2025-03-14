import Image from 'next/image'
import React from 'react'
import img1 from "../public/blog_Img1.png" 
import img2 from "../public/blog_img2.png" 
import img3 from "../public/blog_img3.png" 
import img4 from "../public/pricing.png" 

const BlogFeatures = () => {
  return (
    <section className='container py-12 px-6 mx-auto'>
      <div className='grid grid-col-1 md:grid-cols-2 items-center justify-center gap-5  '>
        <div>
        
            <Image 
            src={img1}
            alt='blog_img1'
            width={605}
            height={500}
            className='md:w-[605px]  md:h-[676px] rounded-[20px]'
            />
          

          <Image 
            src={img2}
            alt='blog_img2'
            width={605}
            height={500}
            className='md:w-[605px]  md:h-[500px] rounded-[20px] mt-5'
            />
        </div>

        <div>
         <Image 
            src={img3}
            alt='blog_img3'
            width={605}
            height={500}
            className=' md:w-[605px]  md:h-[500px] rounded-[20px]'
            />
          
          <Image 
            src={img4}
            alt='blog_img4'
            width={605}
            height={500}
            className='md:w-[605px]  md:h-[676px] rounded-[20px] mt-5'
            />
        </div>

      </div>

      <div>
        
      </div>
    </section>
  )
}

export default BlogFeatures
