import Link from 'next/link';
import { Facebook, Instagram, Twitter, Youtube } from 'react-feather';

export default function Footer() {
  return (
    <div>
      {/* First Footer Section */}
      <footer className="bg-slate-900 text-white p-4">
        <div className="flex flex-col md:flex-row justify-between items-center w-full gap-4 md:gap-0 text-center md:text-left">
          <h1 className="text-2xl font-bold">LOGO</h1>
          <div className="flex gap-4 md:gap-2 justify-center">
            <Facebook />
            <Instagram />
            <Twitter />
            <Youtube />
          </div>
        </div>
      </footer>

      {/* Second Footer Section */}
      <footer className="bg-slate-900 text-white p-4"> 
        <div className="flex flex-col md:flex-row justify-between items-center w-full gap-4 md:gap-0 text-center md:text-left">
          <div>
            &copy; 2024 Jackbox Games. All rights reserved.
          </div>
          <div className="flex gap-4 justify-center md:justify-start">
            <Link href="/">Terms of Service</Link>
            <Link href="/">Privacy Policy</Link>
          </div>
        </div>
      </footer> 
    </div>
  );
}
