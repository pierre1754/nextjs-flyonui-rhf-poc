import Footer from "@/components/organisms/Footer";
import LoginForm from "@/components/organisms/LoginForm";
import { MainNavbar } from "@/components/organisms/MainNavbar";

export default function Login() {
  return (
    <div className="w-full h-screen flex flex-col">
      <MainNavbar />

      <LoginForm />

      <Footer />
    </div>
  );
}
