'use client'

import { usePathname } from 'next/navigation';
import Navbar from "../../components/Navbar/Navbar";

export default function NavigationWrapper() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return !isHomePage ? <Navbar /> : null;
}