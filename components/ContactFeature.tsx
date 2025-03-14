import { MdMarkEmailUnread } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";


const ContactFeature = () => {
  return (
    <section className="container py-12 px-6 mt-20">
    <div className="relative grid grid-cols-1 md:-grid-cols-2 md:flex">
        <div className=" py-5 md:px-5 xl:px-20 md:py-10">
            <div>
            <h1 className="text-[40px] mr-40">
            235D Abosa Lekki, lagos.
            </h1>

            <p className=" text-[18px] text-[#D9D9D9CC] mt-5">
            Postcode: 100001   
            </p>
            </div>

            <div className="py-5">
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

        <div className="  md:w-[485px] md:h-[472px] xl:w-[685px] xl:h-[572px] rounded-3xl
         bg-[#D9D9D91A] shadow-[inset_20px_-20px_40px] shadow-[#A5A5A51A]">
            <div className=" flex flex-col gap-5 p-10 ">
                
                <p className="text-xl"> 
                Send us a message
                </p>

                <div className=" flex flex-col md:flex md:flex-row gap-5 md:mt-10 xl:mt-20  ">
                <input className="bg-black w-full xl:w-[274.67px] p-[5px] rounded-[5px] "
                type="name" placeholder="name"/>

                <input className="bg-black w-full xl:w-[274.67px] p-[5px]  rounded-[5px] "
                type="email" placeholder="Email"/>
                </div>

                <div>
                <input className="bg-black xl:w-[585px] h-[150px] w-full   rounded-[5px] pl-5 "
                type="message" placeholder="Your Message"/>
                </div>

                <button className="md:w-[385px] md:h-full xl:w-[585px] xl:h-[69px] bg-gray-500 
                p-5 xl:mt-5 rounded-r-full">     
                Send
                </button>

            </div>
        </div>
    </div>
    </section>
  )
}

export default ContactFeature