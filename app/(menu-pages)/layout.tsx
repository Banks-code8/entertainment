import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function AuthsLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div className="bg-black ">
        
          <div
          className="relative overflow-hidden">{children}
          </div>
            <Footer />
          </div>
        
    )
}