import { FiInstagram } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";
import { SiApplemusic } from "react-icons/si";
import { FaSpotify } from "react-icons/fa";
import { PiSoundcloudLogoFill } from "react-icons/pi";


const Content = () => {
  return (
        <section className="container py-12 px-6 mx-auto">
              <div className=" flex items-center justify-center ">
                  <div className="relative border-4 border-[#FFFFFF] border-box p-5
                  overflow-hidden rounded-3xl bg-[#D9D9D91A] 
                  shadow-[inset_20px_-20px_40px] shadow-[#A5A5A51A] ">
                      <h2 className="regular capitalize text-center font-bold mt-5 text-3xl">
                        About
                      </h2>

                  <div className="py-5 xl:flex xl:flex-col gap-5 xl:mx-50">
                    <p className=" text-center ">
                    Sign up to receive alerts about new merchandise drops, 
                    new music releases and exclusive VIP deals for concerts and meet and greets
                    </p>
                    <p className="text-center ">
                    Sign up to receive alerts about new merchandise drops,
                    new music releases and exclusive VIP deals for concerts and meet and greets
                    </p>
                    </div>
                    
                    {/* icons */}
                    <div className='relative flex justify-center w-full xl:py-5 gap-5 xl:gap-10'>
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