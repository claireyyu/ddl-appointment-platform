"use client";
import Link from 'next/link';
import { useState } from 'react';
import { Globe, Menu, X } from 'react-feather';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuSeparator, DropdownMenuRadioGroup, DropdownMenuRadioItem } from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Navbar() {
  const [position, setPosition] = useState("english");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isSignedIn = false;

  return (
    <div>
      <div className="flex justify-between items-center p-4 text-foreground sticky top-0 z-50 text-lg bg-navbar">
      <Link href="/" className="text-3xl xl:text-4xl font-bold ml-8 p-2 bg-gradient-to-r from-bpStart to-bpEnd text-transparent bg-clip-text">Bazi</Link>
        <div className="hidden md:flex items-center gap-12">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>

          <div className="flex">
            {isSignedIn ? (
              <Link href="/profile">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>BZ</AvatarFallback>
                </Avatar>
              </Link>
            ) : (
              <Button className="bg-gradient-to-r from-bpStart to-bpEnd border-none text-foreground text-base" variant="default" asChild>
                <Link href="auth/login">Login</Link>
              </Button>
            )}

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="hidden md:flex sticky items-center text-foreground border-none focus bg-transparent">
                  <Globe className="m-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                  <DropdownMenuRadioItem value="english">English</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="chinese">Chinese</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Hamburger menu for smaller screens */}
        <div className="md:hidden">
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
          <Link href="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>

          {isSignedIn ? (
            <Link href="/profile" onClick={() => setIsMenuOpen(false)}>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </Link>
          ) : (
            <Button className="bg-gradient-to-r from-bpStart to-bpEnd border-none text-foreground p-2 rounded-xl" variant="outline" asChild>
              <Link href="auth/login" onClick={() => setIsMenuOpen(false)}>Login</Link>
            </Button>
          )}

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
