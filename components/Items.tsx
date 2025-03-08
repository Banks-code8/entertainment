
import Vector from "./Vector"
import { MdOutlineArrowCircleRight } from "react-icons/md";
import { MdOutlineArrowCircleLeft } from "react-icons/md";
import Image from "next/image";
import img1 from "../public/item_img1.png"
import img2 from "../public/item_img2.png"
import img3 from "../public/item_img3.png"



const Items = () => {
  return (
    <section className="container py-12 px-5 mx-auto">
       <div className='flex flex-col relative  p-4 justify-center gap-'>

          <div className='flex items-center justify-center'>  
            <h1 className='text-6xl md:text-8xl text-center mx-80'>
             Our Artist Catalogue
            </h1>
          </div>  

      
          <div className='relative flex gap-5 w-full xl:flex
          items-center justify-center p-5'>

              <div>
                <button className="hidden xl:block">
                  <MdOutlineArrowCircleLeft
                  size={80}
                  />
                </button>
              </div>

              <div className='items-start hide-scrollbar 
              overflow-x-auto overflow-hidden xl:overflow-x-hidden xl:max-w-full
              flex justify-start xl:justify-center w-full xl:p-10' >            
                  <div className="flex gap-5 w-full">  
                    <Image 
                    src= {img1}
                    alt="image1" 
                    className="w-[300px] h-[400px] rounded-[20px] border-3
                    border-[#D9D9D9]/30  backdrop-blur-sm"         
                    />
                    
                    <Image 
                    src= {img2}
                    alt="image2"
                    className="w-[300px]  rounded-[20px] border-3  h-[400px]
                    border-[#D9D9D9]/30   backdrop-blur-sm"             
                    />
                  
                    <Image 
                    src= {img3}
                    alt="image3"
                    className="w-[300px] h-[400px] rounded-[20px] border-3
                    border-[#D9D9D9]/30  backdrop-blur-sm"          
                    /> 
                
                </div>
              </div>
              <div> 
                <button className="hidden xl:block">
                <MdOutlineArrowCircleRight
                size={80}
                />
                </button>
              </div>
          </div>
      </div>

      {/* 3 vector*/}

      <div className='flex justify-center '>
        <Vector 
        title= "Discover More"
        />
      </div>
  
    
    </section>
  )
}

export default Items