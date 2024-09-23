// "use client";
// import Link from 'next/link';
// import { useState } from 'react';
// import { Globe } from 'react-feather';
// import { Button } from '@/components/ui/button';
// import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuRadioGroup, DropdownMenuRadioItem } from '@/components/ui/dropdown-menu';
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


// export default function Navbar() {
//   const [position, setPosition] = useState("english")
//   const isSignedIn = true;


//   return (
//     <div>
//       <nav className="flex justify-end border-b-2">
//         <DropdownMenu>
//           <DropdownMenuTrigger asChild>
//             <Button variant="outline" className="flex items-center m-1 bg-white p-2 text-slate-900 border-black border-2 rounded-3xl focus"><Globe className="m-1" />Language</Button>
//           </DropdownMenuTrigger>
//           <DropdownMenuContent className="w-56">
//             <DropdownMenuSeparator />
//             <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
//               <DropdownMenuRadioItem value="english">English</DropdownMenuRadioItem>
//               <DropdownMenuRadioItem value="chinese">Chinese</DropdownMenuRadioItem>
//             </DropdownMenuRadioGroup>
//           </DropdownMenuContent>
//         </DropdownMenu>

//       </nav>
//         <nav className="flex justify-between items-center bg-white p-4 text-slate-900 sticky text-xl">
//           <h1 className="text-2xl font-bold">LOGO</h1>
//             <div className="flex items-center gap-12">
//             <Link href="/">Home</Link>
//             <Link href="/services">Services</Link>
//             <Link href="/about">About</Link>
//             <Link href="/contact">Contact</Link>
            
//           {isSignedIn ? 
//             <Link href="/profile">
//               <Avatar>
//                 <AvatarImage src="https://github.com/shadcn.png" />
//                 <AvatarFallback>CN</AvatarFallback>
//               </Avatar>
//             </Link>
//             : <Button className="bg-slate-400 text-white p-2 rounded-xl " variant="outline" asChild>
//               <Link href="auth/login">Login</Link>
//             </Button>
//           }

//         </div>
//       </nav>
//     </div>
//   )
// }

// "use client";
// import Link from 'next/link';
// import { useState } from 'react';
// import { Globe, Menu, X } from 'react-feather';
// import { Button } from '@/components/ui/button';
// import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuSeparator, DropdownMenuRadioGroup, DropdownMenuRadioItem } from '@/components/ui/dropdown-menu';
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// export default function Navbar() {
//   const [position, setPosition] = useState("english");
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const isSignedIn = true;

//   return (
//     <div>
//       <nav className="flex justify-end border-b-2">
//         <DropdownMenu>
//           <DropdownMenuTrigger asChild>
//             <Button variant="outline" className="flex sticky items-center m-1 bg-white p-2 text-slate-900 border-black border-2 rounded-3xl focus">
//               <Globe className="m-1" />Language
//             </Button>
//           </DropdownMenuTrigger>
//           <DropdownMenuContent className="">
//             <DropdownMenuSeparator />
//             <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
//               <DropdownMenuRadioItem value="english">English</DropdownMenuRadioItem>
//               <DropdownMenuRadioItem value="chinese">Chinese</DropdownMenuRadioItem>
//             </DropdownMenuRadioGroup>
//           </DropdownMenuContent>
//         </DropdownMenu>
//       </nav>

//       <nav className="flex justify-between items-center bg-white p-4 text-slate-900 sticky text-xl">
//         <h1 className="text-2xl font-bold">LOGO</h1>
//         <div className="hidden md:flex items-center gap-12">
//           <Link href="/">Home</Link>
//           <Link href="/services">Services</Link>
//           <Link href="/about">About</Link>
//           <Link href="/contact">Contact</Link>

//           {isSignedIn ? (
//             <Link href="/profile">
//               <Avatar>
//                 <AvatarImage src="https://github.com/shadcn.png" />
//                 <AvatarFallback>CN</AvatarFallback>
//               </Avatar>
//             </Link>
//           ) : (
//             <Button className="bg-slate-400 text-white p-2 rounded-xl" variant="outline" asChild>
//               <Link href="auth/login">Login</Link>
//             </Button>
//           )}
//         </div>

//         {/* Hamburger menu for smaller screens */}
//         <div className="md:hidden">
//           <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
//             {isMenuOpen ? <X className="text-2xl" /> : <Menu className="text-2xl" />}
//           </button>
//         </div>
//       </nav>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="md:hidden flex flex-col items-center bg-white text-slate-900 p-4 space-y-4">
//           <Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
//           <Link href="/services" onClick={() => setIsMenuOpen(false)}>Services</Link>
//           <Link href="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
//           <Link href="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>

//           {isSignedIn ? (
//             <Link href="/profile" onClick={() => setIsMenuOpen(false)}>
//               <Avatar>
//                 <AvatarImage src="https://github.com/shadcn.png" />
//                 <AvatarFallback>CN</AvatarFallback>
//               </Avatar>
//             </Link>
//           ) : (
//             <Button className="bg-slate-400 text-white p-2 rounded-xl" variant="outline" asChild>
//               <Link href="auth/login" onClick={() => setIsMenuOpen(false)}>Login</Link>
//             </Button>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

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
  const isSignedIn = true;

  return (
    <div>
      {/* Language Dropdown (Hidden on Mobile) */}
      <nav className="flex justify-end border-b-2 md:flex md:justify-end">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="hidden md:flex sticky items-center m-1 bg-white p-2 text-slate-900 border-black border-2 rounded-3xl focus">
              <Globe className="m-1" />Language
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
      </nav>

      <nav className="flex justify-between items-center bg-white p-4 text-slate-900 sticky text-xl">
        <h1 className="text-2xl font-bold">LOGO</h1>
        <div className="hidden md:flex items-center gap-12">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>

          {isSignedIn ? (
            <Link href="/profile">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </Link>
          ) : (
            <Button className="bg-slate-400 text-white p-2 rounded-xl" variant="outline" asChild>
              <Link href="auth/login">Login</Link>
            </Button>
          )}
        </div>

        {/* Hamburger menu for smaller screens */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="text-2xl" /> : <Menu className="text-2xl" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center bg-white text-slate-900 p-4 space-y-4">
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
            <Button className="bg-slate-400 text-white p-2 rounded-xl" variant="outline" asChild>
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
    </div>
  );
}
