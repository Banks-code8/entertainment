import AboutFeature from "@/components/AboutFeature";
import Footer from "@/components/Footer";
import MenuContent from "@/components/MenuContent";
import Navbar from "@/components/Navbar";






export default function about() {
    return (
      <>
      <MenuContent
      title= "About Hungryboiz"
      subtitle="Hungryboiz Records is an African leading entertainment company."
      />
     <AboutFeature />
     <Footer />
     
      </>
    );
  }