"use client";
import Link from 'next/link';
import * as React from "react"
import { Globe } from 'react-feather';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuRadioGroup, DropdownMenuRadioItem } from '@/components/ui/dropdown-menu';


export default function Navbar() {
  const [position, setPosition] = React.useState("english")
  const isSignedIn = false;


  return (
      <div>
        <nav className="flex justify-end border-b-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center m-1 bg-white p-2 text-slate-900 sticky border-black border-2 rounded-3xl focus"><Globe className="m-1" />Language</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
              <DropdownMenuRadioItem value="english">English</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="chinese">Chinese</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>

        </nav>
        <nav className="flex justify-between items-center bg-white p-4 text-slate-900 sticky text-xl">
            <h1 className="text-2xl font-bold">LOGO</h1>
            <div className="flex items-center gap-12">
            <Link href="/">Home</Link>
            <Link href="/services">Services</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Button className="bg-slate-400 text-white p-2 rounded-xl " variant="outline" asChild>
                <Link href="auth/login">{isSignedIn ? "Log Out" : "Sign In"}</Link>
            </Button>
            </div>
        </nav>
    </div>
  )
}
