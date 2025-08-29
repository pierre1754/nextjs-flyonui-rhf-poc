import { MainNavbar } from "@/components/organisms/MainNavbar";

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col">
      {/* <div className="flex-grow border-b-[1px] border-gray-300 flex flex-row gap-3"></div> */}
      <MainNavbar />

      <div className="flex-grow">CONTENT</div>

      <div className="flex-grow">FOOTER</div>
    </div>
  );
}
