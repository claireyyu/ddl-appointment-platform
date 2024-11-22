import React, { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '../../contexts/AuthContext';
import { AuthContextType } from '../../types/auth';
import { useModal } from '../../contexts/ModalContext';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import CreateProfileBtn from '../CreateProfileBtn/CreateProfileBtn';
import { useTranslations } from 'next-intl';

function AccountDropdownButton() {
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations('AccountDropdown'); // Localization namespace

  const { logout } = useAuth() as AuthContextType;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { openModal } = useModal();

  // Toggles the dropdown menu
  function handleToggleMenu() {
    setIsMenuOpen((prev) => !prev);
  }

  // Handles profile creation redirection and modal opening
  function handleClickCreateProfile() {
    if (pathname !== '/profile') {
      router.push('/profile');
    }
    openModal();
  }

  return (
    <div className="relative">
      {/* Dropdown Toggle Button */}
      <button
        className="hidden xl:flex bg-gradient-to-r from-bpStart to-bpEnd border-none text-foreground text-base px-4 py-2 rounded-custom hover:opacity-90 cursor-pointer focus:outline-none"
        onClick={handleToggleMenu}
      >
        {t('myAccount')}
      </button>

      {/* Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute bg-foreground rounded-custom flex flex-col mt-2">
          {/* Saved Profiles Link */}
          <button
            className="w-full text-bEnd text-base px-4 py-2 hover:bg-gray-100 rounded-t-custom cursor-pointer focus:outline-none flex justify-center items-center whitespace-nowrap"
          >
            <Link href="/profile">
              <span className="cursor-pointer">{t('savedProfiles')}</span>
            </Link>
          </button>

          <div className="border-t border-bEnd w-10/12 mx-auto"></div>

          {/* Create Profile Button */}
          <CreateProfileBtn onClick={handleClickCreateProfile} />

          <div className="border-t border-bEnd w-10/12 mx-auto"></div>

          {/* Logout Button */}
          <button
            className="w-full text-bEnd text-base px-4 py-2 hover:bg-gray-100 rounded-b-custom cursor-pointer focus:outline-none"
            onClick={logout}
          >
            {t('logout')}
          </button>
        </div>
      )}
    </div>
  );
}

export default AccountDropdownButton;
