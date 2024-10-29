import React, { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '../../contexts/AuthContext';
import { AuthContextType } from '../../types/auth';
import { useModal } from '../../contexts/ModalContext';
import { usePathname } from 'next/navigation'
import {useRouter} from 'next/navigation';

function AccountDropdownButton() {
  const pathname = usePathname();
  const router = useRouter();

  const { logout } = useAuth() as AuthContextType;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { openModal } = useModal();

  function handleToggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  function handleClickCreateProfile() { 
    if (pathname !== '/profile') {
      router.push('/profile');
    }
    openModal();
  }

  return (
    <div className="relative">
      <button
        className="hidden md:flex bg-gradient-to-r from-bpStart to-bpEnd border-none text-foreground text-base px-4 py-2 rounded-custom hover:opacity-90 cursor-pointer focus:outline-none"
        onClick={handleToggleMenu}
      >
        My Account
      </button>

      {isMenuOpen && (
        <div className="absolute bg-foreground rounded-custom flex flex-col mt-2">
          <button
            className="w-full text-bEnd text-base px-4 py-2 hover:bg-gray-100 rounded-t-custom cursor-pointer focus:outline-none flex justify-center items-center whitespace-nowrap"
          >
            <Link href="/profile">
              <span className="cursor-pointer">Saved Profiles</span>
            </Link>
          </button>

          <div className="border-t border-bEnd w-10/12 mx-auto"></div>

          <button
            className="w-full text-bEnd text-base px-4 py-2 hover:bg-gray-100 cursor-pointer focus:outline-none whitespace-nowrap"
            onClick={handleClickCreateProfile}
          >
            Create new profile
          </button>

          <div className="border-t border-bEnd w-10/12 mx-auto"></div>

          <button
            className="w-full text-bEnd text-base px-4 py-2 hover:bg-gray-100 rounded-b-custom cursor-pointer focus:outline-none"
            onClick={logout}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

export default AccountDropdownButton;
