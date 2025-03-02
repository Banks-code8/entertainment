import BlogFeatures from "@/components/BlogFeatures";
import Footer from "@/components/Footer";
import MenuContent from "@/components/MenuContent";
import Navbar from "@/components/Navbar";

export default function Blog() {
    return(
        <>
        <MenuContent
      title= "Our Blog"
      subtitle="Get the latest news about Hungryboiz Entertainment."
      />
      <BlogFeatures />
        <Footer />
        </>
    )
}