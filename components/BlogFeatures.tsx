import Image from 'next/image'
import React from 'react'
import img1 from "../public/blog_Img1.png" 
import img2 from "../public/blog_img2.png" 
import img3 from "../public/blog_img3.png" 
import img4 from "../public/pricing.png" 

const BlogFeatures = () => {
  return (
    <section>
      <div className='grid grid-cols-2 gap-5 p-20 '>
        <div>
        
            <Image 
            src={img1}
            alt='blog_img1'
            className='w-[605px]  h-[676px] rounded-[20px]'
            />
          

          <Image 
            src={img2}
            alt='blog_img2'
            className='w-[605px]  h-[500px] rounded-[20px] mt-5'
            />
        </div>

        <div>
         <Image 
            src={img3}
            alt='blog_img3'
            className='w-[605px]  h-[500px] rounded-[20px]'
            />
          
          <Image 
            src={img4}
            alt='blog_img4'
            className='w-[605px]  h-[676px] rounded-[20px] mt-5'
            />
        </div>

      </div>

      <div>
        
      </div>
    </section>
  )
}

export default BlogFeatures
