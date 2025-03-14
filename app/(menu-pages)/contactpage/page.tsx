import ContactFeature from "@/components/ContactFeature";
import Contacts from "@/components/Contacts";
import MenuContent from "@/components/MenuContent";

export const metadata = {
    title: "Contact HungryBoiz"
  };

export default function Blog() {
    return(
        <>
        <MenuContent
        title= "Contact Us"
        subtitle="Our team will be in touch with you soon."
        />
        <Contacts />
        <ContactFeature />
        
        </>
    )
}