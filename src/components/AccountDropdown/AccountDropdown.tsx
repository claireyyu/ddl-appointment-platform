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
        <div className="flex flex-col items-center rounded-custom relative">
          <div className="absolute">
            {/* <Link href="/profile" >
              <div
                className="bg-foreground text-bEnd text-base px-4 py-2 hover:opacity-90 cursor-pointer"
              >
                Saved Profiles
              </div>
            </Link> */}

            <button
              className="w-full bg-foreground text-bEnd text-base px-4 py-2 hover:opacity-90 cursor-pointer"
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