"use client";
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'react-feather';
import Image from 'next/image';
import logo from '../../../public/logo.png';
import { useAuth } from '../../contexts/AuthContext';
import AccountDropdownButton from '../AccountDropdown/AccountDropdown';
import LoginModal from '../LoginModal/LoginModal';
import {useTranslations, useLocale} from 'next-intl';
import { LocaleSwitcher, LocaleSwitcherMobile } from '../LocaleSwitcher/LocaleSwitcher';
import generateLocalizedPath from '../../utils/PathHelper';

export default function Navbar() {
  const t = useTranslations('NavBar');
  const locale = useLocale();

  const { token, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleMobileToProfile(e) {
    if (e.target.innerText === 'My Account') {
      window.location.href = '/profile';
    } else {
      setIsModalOpen(true);
      setIsMenuOpen(false);
    }
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  return (
    <div className="w-full sticky top-0 z-50">
      <div className="grid grid-cols-5 2xl:grid-cols-6 justify-between items-center p-4 text-foreground text-lg bg-background">
        <Link href={generateLocalizedPath('/', locale)} className="col-span-2 2xl:col-span-3 flex items-center ml-8 md:ml-16">
          <Image src={logo} alt="Lab 8" width={100} height={100} />
        </Link>

        <div className="col-span-2 2xl:col-span-2 hidden xl:flex items-center justify-evenly gap-12">
          <Link href={generateLocalizedPath('/', locale)} className="hover-gradient-text transition-transform duration-200">{t('home')}</Link>
          <Link href={generateLocalizedPath('/services', locale)} className="hover-gradient-text  transition-transform duration-200">{t('services')}</Link>
          <Link href={generateLocalizedPath('/about', locale)} className="hover-gradient-text  transition-transform duration-200">{t('about')}</Link>
          <Link href={generateLocalizedPath('/#contact', locale)} className="hover-gradient-text transition-transform duration-200">
            {t('contact')}
          </Link>

        </div>

        <div className="col-span-1 flex justify-center items-center gap-12">
          {token ? (
            <AccountDropdownButton />
          ) : (
            <button 
              className="hidden xl:flex bg-gradient-to-r from-bpStart to-bpEnd border-none text-foreground text-base px-4 py-2 rounded-custom hover:opacity-90 cursor-pointer" 
              onClick={() => setIsModalOpen(true)}
            >
              {t('login')}
            </button>
          )}

          <LocaleSwitcher/>
        </div>

        {/* Hamburger menu for smaller screens */}
        <div className="col-span-2 xl:hidden flex justify-end mr-2">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="text-2xl" /> : <Menu className="text-2xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="xl:hidden flex flex-col items-center bg-background text-foreground p-4 space-y-4">
          <Link href={generateLocalizedPath('/', locale)} onClick={() => setIsMenuOpen(false)}>{t('home')}</Link>
          <Link href={generateLocalizedPath('/services', locale)} onClick={() => setIsMenuOpen(false)}>{t('services')}</Link>
          <Link href={generateLocalizedPath('/about', locale)} onClick={() => setIsMenuOpen(false)}>{t('about')}</Link>
          <Link href={generateLocalizedPath('/#contact', locale)}  onClick={() => setIsMenuOpen(false)}>{t('contact')}</Link>

          <button 
            className="bg-gradient-to-r from-bpStart to-bpEnd border-none text-foreground p-2 rounded-xl" 
            onClick={handleMobileToProfile}
          >
            {token ? t('myAccount') : t('login')}
          </button>

          {token && <button onClick={logout}>{t('logout')}</button>}

          <LocaleSwitcherMobile/>
        </div>
      )}

      {/* Login Modal */}
      <LoginModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}
