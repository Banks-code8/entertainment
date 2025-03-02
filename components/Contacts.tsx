import { MdMarkEmailUnread } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";

const Contacts = () => {
  return (
    <div>
         <div className='flex gap-20 mt-10 justify-center'>
         <div>
            <div className="relative  bg-gray-500 rounded-full p-2 w-17 justify-center">
         <FaPhoneVolume  
            size={50}
            />
            </div>
            
            
            <p>Send an Email</p>
            <p>Info@Hungryboizrecords.com</p>
            
        </div>
         
        <div>
            <div className="bg-gray-500 rounded-full p-2 w-17">
         <MdMarkEmailUnread
            size={50}
            />
            </div>
            
            <div>
            <p>Send an Email</p>
            <p>Info@Hungryboizrecords.com</p>
            </div>
        </div>
         
        <div>
            <div className="bg-gray-500 rounded-full p-2 w-17">
         <FaPhoneVolume  
            size={50}
            />
            </div>
            
            <div>
            <p>Send an Email</p>
            <p>Info@Hungryboizrecords.com</p>
            </div>
        </div>
        
          </div> 
    </div>
  )
}

export default Contacts
