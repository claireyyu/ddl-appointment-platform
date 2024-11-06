import { useState } from 'react';

export default function ResetPasswordForm({ accountFormData, handleAccountFormChange, handleSendVerificationCode, handleVerifyCode, handleResetPassword, setIsChangingPassword, errorMessage }) {
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [isCodeVerified, setIsCodeVerified] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSendCode = async () => {
    const success = await handleSendVerificationCode();
    if (success) {
      setIsCodeSent(true);
    }
  };

  const handleConfirmCode = async () => {
    const success = await handleVerifyCode(verificationCode);
    if (success) {
      setIsCodeVerified(true);
    }
  };

  const handleChangePassword = async () => {
    const success = await handleResetPassword(newPassword, confirmPassword);
    if (success) {
      setIsChangingPassword(false);
    }
  };

  return (
    <div className="text-background flex flex-col justify-center items-center p-24">
      {!isCodeSent && 
        (<div className="flex flex-col min-w-64">
        <h1 className="text-2xl text-center mb-4">Reset Password</h1>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="p-2 rounded-custom bg-foreground text-background border-4 border-bStart"
          value={accountFormData.email}
          onChange={handleAccountFormChange}
        />
        <button
          className="w-full bg-gradient-to-r from-bStart to-bEnd text-white py-2 rounded-lg mt-8 shadow-button hover:opacity-90"
          onClick={handleSendCode}
          >
          Send Verification Code
        </button>
        </div>)
      }

      {isCodeSent && !isCodeVerified &&
        (<div className="flex flex-col min-w-64">
        <h1 className="text-2xl text-center mb-4">Verify Code</h1>
        <input
          type="text"
          name="verificationCode"
          placeholder="Verification Code"
          className="p-2 rounded-custom bg-foreground text-background border-4 border-bStart"
          value={verificationCode}
          onChange={(e) => setVerificationCode(e.target.value)}
        />
        <button
          className="w-full bg-gradient-to-r from-bStart to-bEnd text-white py-2 rounded-lg mt-8 shadow-button hover:opacity-90"
          onClick={handleConfirmCode}
          >
          Confirm Code
        </button>
        <button className="text-center cursor-pointer mt-4" onClick={handleSendCode}>Resend Code</button>
        </div>)
      }

      {isCodeVerified &&
        (<div className="flex flex-col min-w-64">
        <h1 className="text-2xl text-center mb-4">Change Password</h1>
        <input
          type="password"
          name="newPassword"
          placeholder="New Password"
          className="p-2 rounded-custom bg-foreground text-background border-4 border-bStart mb-4"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm New Password"
          className="p-2 rounded-custom bg-foreground text-background border-4 border-bStart"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button
          className="w-full bg-gradient-to-r from-bStart to-bEnd text-white py-2 rounded-lg mt-8 shadow-button hover:opacity-90"
          onClick={handleChangePassword}
          >
          Confirm Change
        </button>
        </div>)
      }

      <button className="text-start cursor-pointer mt-4" onClick={() => setIsChangingPassword(false)}>Back to Sign In</button>

      {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
    </div>
  );
}