import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import Modal from '../Modal/Modal';
import googleLogo from '../../../public/google-icon.png';
import Image from 'next/image';

export default function LoginModal({ isOpen, onClose }) {
  const { loginWithGoogle } = useAuth();
  const [isCreatingAccount, setIsCreatingAccount] = useState(false);
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [accountFormData, setAccountFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  function handleAccountFormChange(e) {
    const { name, value } = e.target;
    setAccountFormData({
      ...accountFormData,
      [name]: value,
    });
  }

  const renderContent = () => {
    if (isCreatingAccount) {
      return (
        <div className="text-background flex flex-col justify-center items-center p-24">
        <h1 className="text-2xl text-center mb-4">Create Account</h1>
        <div className="flex space-x-2 mb-8">
          <p className="text-nowrap">Already have an account?</p>
          <button className="underline text-nowrap cursor-pointer" onClick={() => setIsCreatingAccount(false)}>Sign In</button>
        </div>
          <div className="flex flex-col md:space-y-2 min-w-64">
          <input type="username" name="username" id="username" placeholder="Username" className="p-1 rounded-custom bg-foreground text-background border-4 border-bStart" value={accountFormData.username} onChange={handleAccountFormChange}/>
          <input type="email" name="email" id="email" autoComplete="email" placeholder="Email" className="p-1 rounded-custom bg-foreground text-background border-4 border-bStart" value={accountFormData.email} onChange={handleAccountFormChange}/>
          <input type="password" name="password" id="password" placeholder="Password" className="p-1 rounded-custom bg-foreground text-background border-4 border-bStart" value={accountFormData.password} onChange={handleAccountFormChange} />

        </div>

        <button className="w-full bg-gradient-to-r from-bStart to-bEnd text-white py-2 rounded-lg mt-12 shadow-button hover:opacity-90">
          Create Account
        </button>
        
        <div className="flex">
          <p className="mt-2">Or</p>
        </div>
        <button className="w-full border-bStart border-4 rounded-lg mt-2 px-2 py-1 shadow-button hover:opacity-75 cursor-pointer" onClick={loginWithGoogle}>
          <div className="flex items-center justify-center">
            <Image src={googleLogo} alt="Logo" width="50" height="50" />
            <p className="ml-2">Continue with Google</p>
          </div>
        </button>
      </div>
      );
    }

    if (isChangingPassword) {
      return (
        <>
          <h2 className="text-xl mb-4">Change Password</h2>
          {/* Password change form */}
          <button onClick={() => setIsChangingPassword(false)} className="text-blue-500 underline mt-4">
            Back to login
          </button>
        </>
      );
    }

    return (
      <div className="text-background flex flex-col justify-center items-center p-24">
        <h1 className="text-2xl text-center mb-4">Sign In</h1>
        <div className="flex space-x-2 mb-8">
          <p className="text-nowrap">Don't have an account?</p>
          <button className="underline text-nowrap cursor-pointer" onClick={() => setIsCreatingAccount(true)}>Sign Up</button>
        </div>
        <div className="flex flex-col md:space-y-2 min-w-64">
          <input type="email" name="email" id="email" autoComplete="email" placeholder="Email" className="p-1 rounded-custom bg-foreground text-background border-4 border-bStart" value={accountFormData.email} onChange={handleAccountFormChange}/>
          <input type="password" name="password" id="password" placeholder="Password" className="p-1 rounded-custom bg-foreground text-background border-4 border-bStart" value={accountFormData.password} onChange={handleAccountFormChange} />

          <button className="text-start cursor-pointer" onClick={() => setIsChangingPassword(true)}>Forgot Password?</button>
        </div>

        <button className="w-full bg-gradient-to-r from-bStart to-bEnd text-white py-2 rounded-lg mt-12 shadow-button hover:opacity-90">
          Sign In
        </button>
        
        <div className="flex">
          <p className="mt-2">Or</p>
        </div>
        <button className="w-full border-bStart border-4 rounded-lg mt-2 px-2 py-1 shadow-button hover:opacity-75 cursor-pointer" onClick={loginWithGoogle}>
          <div className="flex items-center justify-center">
            <Image src={googleLogo} alt="Logo" width="50" height="50" />
            <p className="ml-2">Continue with Google</p>
          </div>
        </button>
      </div>
    );
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} bgColor={'bg-foreground'}>
      {renderContent()}
    </Modal>
  );
}
