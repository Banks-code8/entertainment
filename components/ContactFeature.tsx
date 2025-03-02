import { MdMarkEmailUnread } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";


const ContactFeature = () => {
  return (
    <section className="mt-50 ">
    <div className="relative flex">
        <div className="px-20 p-10">
            <div>
            <p className="text-[40px] mr-40">
            235D Abosa Lekki, lagos.
            </p>

            <p className=" text-[18px] text-[#D9D9D9CC] mt-5">
            Postcode: 100001   
            </p>
            </div>

            <div className="mt-5">
                <div className="flex items-center text-[#D9D9D9CC] gap-5">
                <MdMarkEmailUnread />
                <p>
                Info@Hungryboizrecords,com
                </p>
                </div>

                <div className="flex items-center text-[#D9D9D9CC] gap-5">
                <FaPhoneVolume />
                <p>
                +234 703 456 2345
                </p>
                </div>
            </div>
        </div>

        <div className=" w-[685px] h-[572px] rounded-3xl bg-[#D9D9D91A] shadow-[inset_20px_-20px_40px] shadow-[#A5A5A51A]">
            <div className=" flex flex-col gap-5 p-10 ">
                
                <p className="text-[26px]"> 
                Send us a message
                </p>

                <div className="flex gap-5 mt-20">
                <input className="bg-black w-[274.67px] p-[5px] rounded-[5px] pl-5"
                type="name" placeholder="name"/>

                <input className="bg-black w-[274.67px] p-[5px] rounded-[5px] pl-5"
                type="email" placeholder="Email"/>
                </div>

                <div>
                <input className="bg-black w-[585px] h-[150px] p-[5px]  rounded-[5px] pl-5 "
                type="message" placeholder="Your Message"/>
                </div>

                <button className="w-[585px] h-[69px] bg-gray-500 mt-5 rounded-r-full">     
                Send
                </button>

            </div>
        </div>
    </div>
    </section>
  )
}

export default ContactFeature