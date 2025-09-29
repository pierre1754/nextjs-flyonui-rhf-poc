import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer bg-base-200/60 p-10">
      <aside className="gap-6">
        <div className="flex items-center gap-2 text-xl font-bold text-base-content">
          <Image src="/vercel.svg" alt="Vercel Logo" width={24} height={24} />
          <span>Vercel</span>
        </div>
        <p className="text-base-content text-sm">
          This is a demo website
          <br />
          With Next.js and FlyonUI
        </p>
      </aside>
      <nav className="text-base-content">
        <h6 className="footer-title">Services</h6>
        <Link href="#" className="link link-hover">
          Branding
        </Link>
        <Link href="#" className="link link-hover">
          Design
        </Link>
        <Link href="#" className="link link-hover">
          Marketing
        </Link>
        <Link href="#" className="link link-hover">
          Advertisement
        </Link>
      </nav>
      <nav className="text-base-content">
        <h6 className="footer-title">Company</h6>
        <Link href="#" className="link link-hover">
          About us
        </Link>
        <Link href="#" className="link link-hover">
          Contact
        </Link>
        <Link href="#" className="link link-hover">
          Jobs
        </Link>
        <Link href="#" className="link link-hover">
          Press kit
        </Link>
      </nav>
    </footer>
  );
}
