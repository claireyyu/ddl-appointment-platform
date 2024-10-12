import Link from 'next/link';
import { Facebook, Instagram, Twitter, Youtube } from 'react-feather';

export default function Footer() {
  return (
    <div>
      <footer className="bg-background text-foreground p-4"> 
        <div className="flex flex-col md:flex-row justify-between items-center w-full gap-4 md:gap-0 text-center md:text-left">
          <div>
            Ⓒ 2024 Lab 8. All rights reserved.
          </div>
        </div>
      </footer> 
    </div>
  );
}
