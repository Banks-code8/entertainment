import ContactFeature from "@/components/ContactFeature";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";
import MenuContent from "@/components/MenuContent";
import Navbar from "@/components/Navbar";

export default function Blog() {
    return(
        <>
        <MenuContent
        title= "Contact Us"
        subtitle="Our team will be in touch with you soon."
        />
        <Contacts />
        <ContactFeature />
        <Footer />
        </>
    )
}