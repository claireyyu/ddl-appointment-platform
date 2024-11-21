"use client";
import Link from 'next/link';
import { useState } from 'react';
import { Globe, Menu, X } from 'react-feather';
import Image from 'next/image';
import logo from '../../../public/logo.png';
import { useAuth } from '../../contexts/AuthContext';
import AccountDropdownButton from '../AccountDropdown/AccountDropdown';
import LoginModal from '../LoginModal/LoginModal';
import {useLocale, useTranslations} from 'next-intl';
import LocaleSwitcher from '../LocaleSwitcher/LocaleSwitcher';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const t = useTranslations('NavBar');
  const locale = useLocale();
  const router = useRouter();

  const { token, logout } = useAuth();
  const [position, setPosition] = useState("english");
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
        <Link href="/" className="col-span-2 2xl:col-span-3 flex items-center ml-8 md:ml-16">
          <Image src={logo} alt="Lab 8" width={100} height={100} />
        </Link>

        <div className="col-span-2 2xl:col-span-2 hidden xl:flex items-center justify-evenly gap-12">
          <Link href="/" className="hover:-translate-y-0.5 transition-transform duration-200">{t('home')}</Link>
          <Link href="/services" className="hover:-translate-y-0.5 transition-transform duration-200">{t('services')}</Link>
          <Link href="/about" className="hover:-translate-y-0.5 transition-transform duration-200">{t('about')}</Link>
          <Link href="/#contact" className="hover:-translate-y-0.5 transition-transform duration-200">{t('contact')}</Link>
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

          {/* <LocaleSwitcher /> */}

          {/* <button className="hidden xl:flex sticky cursor-pointer items-center text-foreground border-none focus bg-transparent">
            <Globe className="m-1" />
          </button> */}

          <div className="hidden xl:block relative">
            <button
              className="hidden xl:flex sticky cursor-pointer items-center text-foreground border-none focus bg-transparent"
              onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle dropdown
            >
              <Globe className="m-1" />
            </button>
            {isMenuOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-background border border-gray-300 rounded-lg shadow-lg z-50">
                <button
                  className="block w-full px-4 py-2 text-left hover:opacity-75"
                  onClick={() => {
                    router.push('/en', '/en', { locale: 'en' }); // Always navigate to home page in English
                    setIsMenuOpen(false); // Close the dropdown
                  }}
                >
                  English
                </button>
                <button
                  className="block w-full px-4 py-2 text-left hover:opacity-75"
                  onClick={() => {
                    console.log('Current pathname:', pathname);
                    router.replace('/zh', '/zh', { locale: 'zh' }); // Switch to Chinese
                    setIsMenuOpen(false); // Close the dropdown
                  }}
                >
                  中文
                </button>
              </div>
            )}
          </div>

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
          <Link href="/" onClick={() => setIsMenuOpen(false)}>{t('home')}</Link>
          <Link href="/services" onClick={() => setIsMenuOpen(false)}>{t('services')}</Link>
          <Link href="/about" onClick={() => setIsMenuOpen(false)}>{t('about')}</Link>
          <Link href="/#contact" onClick={() => setIsMenuOpen(false)}>{t('contact')}</Link>

          <button 
            className="bg-gradient-to-r from-bpStart to-bpEnd border-none text-foreground p-2 rounded-xl" 
            onClick={handleMobileToProfile}
          >
            {token ? t('myAccount') : t('login')}
          </button>

          {token && <button onClick={logout}>Logout</button>}

          {/* Language Switch (In Mobile Menu) */}
          <div className="flex flex-col items-center">
            <div className="flex gap-4">
              <button onClick={() => {
              setPosition('english')
              router.replace('/en', '/en', { locale: 'en' }); // Switch to English
              }} className={`${position === 'english' ? 'border-white border-2' : 'border-transparent'} p-2 rounded-xl`}>
                English
              </button>
              <button onClick={() => {setPosition('chinese')
                router.replace('/zh', '/zh', { locale: 'zh' }); // Switch to Chinese
              }} className={`${position === 'chinese' ? 'border-white border-2' : 'border-transparent'} p-2 rounded-xl`}>
                中文
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Login Modal */}
      <LoginModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}
