import Footer from "@/components/organisms/Footer";
import { MainNavbar } from "@/components/organisms/MainNavbar";

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col">
      <MainNavbar />

      <div className="flex-grow">CONTENT</div>

      <Footer />
    </div>
  );
}
