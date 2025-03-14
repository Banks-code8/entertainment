import AboutFeature from "@/components/AboutFeature";
import MenuContent from "@/components/MenuContent";

export const metadata = {
  title: "About HungryBoiz"
};

export default function about() {
    return (
      <>
      <MenuContent
      title= "About Hungryboiz"
      subtitle="Hungryboiz Records is an African leading entertainment company."
      />
     <AboutFeature />
      </>
    );
  }