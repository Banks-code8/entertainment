import BlogFeatures from "@/components/BlogFeatures";
import MenuContent from "@/components/MenuContent";

export const metadata = {
  title: "HungryBoiz Blog"
};

export default function Blog() {
    return(
        <>
        <MenuContent
      title= "Our Blog"
      subtitle="Get the latest news about Hungryboiz Entertainment."
      />
      <BlogFeatures />
        
        </>
    )
}