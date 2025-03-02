
import Vector from "./Vector"
import { MdOutlineArrowCircleRight } from "react-icons/md";
import { MdOutlineArrowCircleLeft } from "react-icons/md";
import Image from "next/image";
import img1 from "../public/item_img1.png"
import img2 from "../public/item_img2.png"
import img3 from "../public/item_img3.png"


const Items = () => {
  return (
    <section>
    <div className='flex flex-col relative mt-10 p-4 justify-center gap-'>

      {/* 1 */}
      <div className='flex justify-center'>
          <div className=' w-[447px]  '>
          <h1 className='text-[80px] text-center'>
            Our Artist Catalogue</h1>
        </div>
    </div>

      {/* 2*/}
        <div className='relative flex gap-5 w-full items-center justify-center mt-10'>
           
            <MdOutlineArrowCircleLeft
            size={80}
            />
         
            <div className='flex justify-center w-full gap-10' >            
            <Image 
            src= {img1}
            alt="map" 
            className="w-[250px] h-[350px] rounded-[20px] border-3
             border-[#D9D9D9]/30  backdrop-blur-sm"         
            />
            
            <Image 
            src= {img2}
            alt="map"
            className="w-[300px] h-[400px] rounded-[20px] border-3
            border-[#D9D9D9]/30  backdrop-blur-sm"             
            />
          
            <Image 
            src= {img3}
            alt="map"
            className="w-[250px] h-[350px] rounded-[20px] border-3
             border-[#D9D9D9]/30  backdrop-blur-sm"          
            /> 
            </div>
            
          <div className='item-center justify-center w-[80px] h-[80px] pr-4'>
          <MdOutlineArrowCircleRight
          size={80}
          />
          </div>
      
      </div>

      {/* 3 vector*/}

      <div className='flex justify-center mt-10'>
        <Vector 
        title= "Discover More"
        />
      </div>
  </div>
    
    </section>
  )
}

export default Items