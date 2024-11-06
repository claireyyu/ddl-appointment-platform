import { useState, useEffect } from 'react';
import Image from 'next/image';
import googleLogo from '../../../public/google-icon.png';

export default function CreateAccountForm({ accountFormData, handleAccountFormChange, handleSignup, loginWithGoogle, setIsCreatingAccount, errorMessage }) {
  return (
    <div className="text-background flex flex-col justify-center items-center p-24">
      <h1 className="text-2xl text-center mb-4">Create Account</h1>
      <div className="flex space-x-2 mb-8">
        <p className="text-nowrap">Already have an account?</p>
        <button className="underline text-nowrap cursor-pointer" onClick={() => setIsCreatingAccount(false)}>Sign In</button>
      </div>
      <div className="flex flex-col md:space-y-2 min-w-64">
        <input
          type="text"
          name="name"
          placeholder="Username"
          className="p-2 rounded-custom bg-foreground text-background border-4 border-bStart"
          value={accountFormData.name}
          onChange={handleAccountFormChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="p-2 rounded-custom bg-foreground text-background border-4 border-bStart"
          value={accountFormData.email}
          onChange={handleAccountFormChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="p-2 rounded-custom bg-foreground text-background border-4 border-bStart"
          value={accountFormData.password}
          onChange={handleAccountFormChange}
        />
      </div>
      <button
        className="w-full bg-gradient-to-r from-bStart to-bEnd text-white py-2 rounded-lg mt-12 shadow-button hover:opacity-90"
        onClick={handleSignup}
      >
        Create Account
      </button>
      {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
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