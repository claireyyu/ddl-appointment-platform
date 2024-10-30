"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Globe, Menu, X } from 'react-feather';
import Image from 'next/image';
import logo from '../../../public/logo.png';
import { useAuth } from '../../contexts/AuthContext';
import AccountDropdownButton from '../AccountDropdown/AccountDropdown';

export default function Navbar() {
  // const [token, setToken] = useState(null);
  const { token, user, loginWithGoogle, logout } = useAuth();
  const [position, setPosition] = useState("english");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toProfile() {
    window.location.href = '/profile';
  }

  return (
    <div className="w-full sticky top-0 z-50">
      <div className="grid grid-cols-5 justify-between items-center p-4 text-foreground text-lg bg-background">
        <Link href="/" className="col-span-2 flex items-center ml-8 md:ml-16">
          <Image src={logo} alt="Lab 8" width={100} height={100} />
        </Link>

        <div className="col-span-2 hidden lg:flex items-center justify-evenly gap-12">
            <Link href="/" className="hover:-translate-y-0.5 transition-transform duration-200">Home</Link>
            <Link href="/services" className="hover:-translate-y-0.5 transition-transform duration-200">Services</Link>
            <Link href="/about" className="hover:-translate-y-0.5 transition-transform duration-200">About</Link>
            <Link href="/#contact" className="hover:-translate-y-0.5 transition-transform duration-200">Contact</Link>
        </div>

        <div className="col-span-1 flex justify-center items-center gap-12">
          {token ? (
              <AccountDropdownButton />
            ) : (
              <button 
                className="hidden lg:flex bg-gradient-to-r from-bpStart to-bpEnd border-none text-foreground text-base px-4 py-2 rounded-custom hover:opacity-90 cursor-pointer" 
                onClick={loginWithGoogle}
              >
                Login
              </button>
            )}
          <button className="hidden lg:flex sticky cursor-pointer items-center text-foreground border-none focus bg-transparent">
              <Globe className="m-1" />
          </button>
        </div>

        {/* Hamburger menu for smaller screens */}
        <div className="col-span-2 lg:hidden flex justify-end mr-2">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="text-2xl" /> : <Menu className="text-2xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden flex flex-col items-center bg-background text-foreground p-4 space-y-4">
          <Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link href="/services" onClick={() => setIsMenuOpen(false)}>Services</Link>
          <Link href="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
          <Link href="/#contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>

          <button 
            className="bg-gradient-to-r from-bpStart to-bpEnd border-none text-foreground p-2 rounded-xl" 
            onClick={token ? toProfile : loginWithGoogle}
          >
            {token ? 'My Account' : 'Login'}
          </button>

          {/* Language Switch (In Mobile Menu) */}
          <div className="flex flex-col items-center">
            <div className="flex gap-4">
              <button onClick={() => setPosition('english')} className={`${position === 'english' ? 'border-white border-2' : 'border-transparent'} p-2 rounded-xl`}>
                English
              </button>
              <button onClick={() => setPosition('chinese')} className={`${position === 'chinese' ? 'border-white border-2' : 'border-transparent'} p-2 rounded-xl`}>
                Chinese
              </button>
            </div>
          </div>
        </div>
      )}
    </div >
  );
}
