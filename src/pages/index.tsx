import { MainNavbar } from "@/components/organisms/MainNavbar";

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col">
      <MainNavbar />

      <div className="flex-grow">CONTENT</div>

      <div className="flex-grow">FOOTER</div>
    </div>
  );
}
