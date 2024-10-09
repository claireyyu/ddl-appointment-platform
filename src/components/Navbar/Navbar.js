"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Globe, Menu, X } from 'react-feather';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import logo from '../../../public/logo.png';
import { useAuth } from '@/contexts/AuthContext';

export default function Navbar() {
  const { user, loginWithGoogle, logout } = useAuth();
  const [position, setPosition] = useState("english");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <div className="grid grid-cols-5 justify-between items-center p-4 text-foreground sticky top-0 z-50 text-lg bg-navbar">
        <Link href="/" className="col-span-2 flex items-center ml-8 md:ml-16">
          <Image src={logo} alt="Lab 8" width={100} height={100} />
        </Link>

        <div className="col-span-2 hidden md:flex items-center justify-evenly gap-12">
            <Link href="/">Home</Link>
            <Link href="/services">Services</Link>
            <Link href="/about">About</Link>
            <Link href="/#contact" >Contact</Link>
        </div>

        <div className="col-span-1 flex justify-center items-center gap-12">
          {user ? (
              <Link href="/profile">
                <button 
                  className="hidden md:flex bg-gradient-to-r from-bpStart to-bpEnd border-none text-foreground text-base px-4 py-2 rounded-custom"
                >
                  Profile
                </button>
              </Link>
            ) : (
              <button 
                className="hidden md:flex bg-gradient-to-r from-bpStart to-bpEnd border-none text-foreground text-base px-4 py-2 rounded-custom" 
                onClick={loginWithGoogle}
              >
                Login
              </button>
            )}
          <Button variant="outline" className="hidden md:flex sticky cursor-pointer items-center text-foreground border-none focus bg-transparent">
            <Globe className="m-1" />
          </Button>
        </div>

        {/* Hamburger menu for smaller screens */}
        <div className="col-span-2 md:hidden flex justify-end mr-2">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="text-2xl" /> : <Menu className="text-2xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center bg-background text-foreground p-4 space-y-4">
          <Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link href="/services" onClick={() => setIsMenuOpen(false)}>Services</Link>
          <Link href="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
          <Link href="/#contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>

          <Button 
            className="bg-gradient-to-r from-bpStart to-bpEnd border-none text-foreground p-2 rounded-xl" 
            variant="outline" 
            onClick={user ? logout : loginWithGoogle}
          >
            {user ? 'Logout' : 'Login'}
          </Button>

          {/* Language Switch (In Mobile Menu) */}
          <div className="flex flex-col items-center">
            <div className="flex gap-4">
              <Button onClick={() => setPosition('english')} variant={position === 'english' ? 'outline' : 'solid'}>
                English
              </Button>
              <Button onClick={() => setPosition('chinese')} variant={position === 'chinese' ? 'outline' : 'solid'}>
                Chinese
              </Button>
            </div>
          </div>
        </div>
      )}
    </div >
  );
}
