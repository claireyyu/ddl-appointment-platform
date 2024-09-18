import Link from 'next/link';
import { Facebook, Instagram, Twitter, Youtube } from 'react-feather';


export default function Footer() {
  return (
    <div>
      <footer className="bg-slate-900 text-white p-2">
        <div className="flex justify-between items-center w-full">
          <h1 className="text-2xl font-bold">LOGO</h1>
          <div className="flex gap-2">
            <Facebook />
            <Instagram />
            <Twitter />
            <Youtube />
          </div>
        </div>
      </footer>

      <footer className="bg-slate-900 text-white p-2"> 
        <div className="flex justify-between items-center w-full">
          <div>
            @Copyright 2024 Jackbox Games. All rights reserved.
          </div>
          <div className="flex gap-4">
            <Link href="/">Terms of Service</Link>
            <Link href="/" >Privacy Policy</Link>
          </div>
        </div>
      </footer> 
    </div>
  )
}
