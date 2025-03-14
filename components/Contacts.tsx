import { MdMarkEmailUnread } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";

const Contacts = () => {
  return (
    <section className="container py-12 px-6 mx-auto">
         <div className='relative flex-col grid grid-cols-1 md:grid-cols-3 gap-20 mt-10 justify-center'>
         
            <div className="relative  w-full p-5 ">
               <div className="flex justify-center">
               <FaPhoneVolume  
               size={50}
               /> 
               </div>

               <div  className="text-center mt-5">   
               <h1>Call Us</h1>
               <p>Info@Hungryboizrecords.com</p>
               </div>
            </div>
            
            
            <div className="relative  w-full p-5 ">
               <div className="flex justify-center">
               <  MdMarkEmailUnread  
               size={50}
               /> 
               </div>

               <div className="text-center mt-5">   
               <h1>Message Us</h1>
               <p>Info@Hungryboizrecords.com</p>
               </div>
            </div>
         
            <div className="relative  w-full p-5 ">
               <div className="flex justify-center">
               <FaPhoneVolume  
               size={50}
               /> 
               </div>

               <div className="text-center mt-5">   
               <h1>Call Us</h1>
               <p>Info@Hungryboizrecords.com</p>
               </div>
            </div>
        </div>
      
    </section>
  )
}

export default Contacts
