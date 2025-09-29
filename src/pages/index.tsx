import Footer from "@/components/organisms/Footer";
import HomeContent from "@/components/organisms/HomeContent";
import { MainNavbar } from "@/components/organisms/MainNavbar";

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col">
      <MainNavbar />

      <HomeContent />

      <Footer />
    </div>
  );
}
