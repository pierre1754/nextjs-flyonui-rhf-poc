import Link from "next/link";
import Image from "next/image";
import { Navbar } from "../molecules/Navbar";

export function MainNavbar() {
  return (
    <Navbar
      root={
        <Link href="/">
          <Image src="./next.svg" alt="NextExample" width={300} height={24} />
        </Link>
      }
      items={[
        <Link href="/">Home</Link>,
        <Link href="/services">Services</Link>,
        <Link href="/contact">Contact us</Link>,
      ]}
    />
  );
}
