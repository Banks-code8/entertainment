import { FiInstagram } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";
import { SiApplemusic } from "react-icons/si";
import { FaSpotify } from "react-icons/fa";
import { PiSoundcloudLogoFill } from "react-icons/pi";


const Content = () => {
  return (
    <section>
    <div className=" flex items-center justify-center mt-10 ">
        <div className=" border-4 border-[#FFFFFF] border-box  px-20
         relative w-[1160px] h-[319px] overflow-hidden rounded-3xl bg-[#D9D9D91A] shadow-[inset_20px_-20px_40px] shadow-[#A5A5A51A] ">
          <h2 className="regular capitalize text-center  mt-10
          text-[33px]">
            <strong>About</strong>
          </h2>

        
          <p className=" relative w-[862px] mt-5 w- text-center ">
          Sign up to receive alerts about new merchandise drops, 
          new music releases and exclusive VIP deals for concerts and meet and greets
          </p>
          <p className="relative w-[862px] mt-5 text-white text-center ">
          Sign up to receive alerts about new merchandise drops,
           new music releases and exclusive VIP deals for concerts and meet and greets
          </p>
          
          {/* icons */}
          <div className='relative flex justify-center mt-5 gap-5'>
          <FiInstagram 
          size={50}
          />
          <FaXTwitter 
          size={50}
          />
          <FaYoutube
          size={50}
          />
          <FaTiktok 
          size={50}
          />
          <SiApplemusic
          size={50}
          />
          <FaSpotify
          size={50}
          />
          <PiSoundcloudLogoFill 
          size={50}
          />

          </div>
        </div>
    </div>
    </section>
  )
}

export default Content