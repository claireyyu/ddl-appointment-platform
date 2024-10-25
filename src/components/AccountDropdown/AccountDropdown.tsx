import React, {useState} from 'react'
import Link from 'next/link'
import { useAuth } from '../../contexts/AuthContext'
import { AuthContextType } from '../../types/auth'

function AccountDropdownButton() {
  const { logout } = useAuth() as AuthContextType;

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleToggleMenu() { 
    setIsMenuOpen(!isMenuOpen);
  }

  return (
  //   <Link href="/profile">
  //     <button
  //       className="hidden md:flex bg-gradient-to-r from-bpStart to-bpEnd border-none text-foreground text-base px-4 py-2 rounded-custom hover:opacity-90 cursor-pointer"
  //     >
  //       My Account
  //     </button>
    // </Link>
    <div>
      <button
        className="hidden md:flex bg-gradient-to-r from-bpStart to-bpEnd border-none text-foreground text-base px-4 py-2 rounded-custom hover:opacity-90 cursor-pointer"
        onClick={handleToggleMenu}
      >
        My Account
      </button>

      {isMenuOpen && (
        <div className="flex flex-col items-center relative">
          <div className="absolute bg-foreground rounded-custom flex flex-col">

            <button
                className="w-full text-bEnd text-base px-4 py-2 hover:bg-gray-100 hover:rounded-t-custom cursor-pointer flex justify-center items-center whitespace-nowrap"
              >
                <Link href="/profile" >
                  Saved Profiles
                </Link>
            </button>

            <div className="border-t border-bEnd w-10/12 mx-auto"></div>

            <button
              className="w-full text-bEnd text-base px-4 py-2 hover:bg-gray-100 hover:rounded-b-custom cursor-pointer"
              onClick={logout}
            >
              Logout
            </button>

        </div>
      </div>
      )}
    </div>
  )
}

export default AccountDropdownButton

            {/* <Link href="/profile" >
              <div
                className="bg-foreground text-bEnd text-base px-4 py-2 hover:opacity-90 cursor-pointer"
              >
                Saved Profiles
              </div>
            </Link> */}