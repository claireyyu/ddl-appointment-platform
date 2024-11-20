// import { useEffect, useState } from 'react';
// import { useAuth } from '../../contexts/AuthContext';
// import Modal from '../Modal/Modal';
// import CreateAccountForm from '../CreateAccountForm/CreateAccountForm';
// import ResetPasswordForm from '../ResetPasswordForm/ResetPasswordForm';
// import SignInForm from '../SignInForm/SignInForm';

// export default function LoginModal({ isOpen, onClose }) {
//   const { loginWithGoogle, signup, login, sendResetPasswordEmail, verifyCode, resetPassword } = useAuth();
//   const [isCreatingAccount, setIsCreatingAccount] = useState(false);
//   const [isChangingPassword, setIsChangingPassword] = useState(false);
//   const [accountFormData, setAccountFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//   });
//   const [verificationCode, setVerificationCode] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   // Clear error message when user types
//   useEffect(() => {
//     if (errorMessage) {
//       setErrorMessage('');
//     }
//   }, [accountFormData]);

//   // Clear form data when modal is closed
//   useEffect(() => {
//     if (!isOpen) {
//       setAccountFormData({ name: '', email: '', password: '' });
//       setIsCreatingAccount(false);
//       setIsChangingPassword(false);
//     }
//   }, [isOpen]);

//   // Handle form input changes
//   function handleAccountFormChange(e) {
//     const { name, value } = e.target;
//     setAccountFormData({
//       ...accountFormData,
//       [name]: value,
//     });
//   }

//   // Signup handler using AuthContext's signup function
//   async function handleSignup() {
//     if (!accountFormData.name || !accountFormData.email || !accountFormData.password) {
//       setErrorMessage('Please complete all fields.');
//       return;
//     }

//     if (accountFormData.password.length < 6) {
//       setErrorMessage('Password must be at least 6 characters long.');
//       return;
//     }

//     try {
//       await signup(accountFormData.name, accountFormData.email, accountFormData.password);
//       alert('Account created successfully!');
//       setAccountFormData({ name: '', email: '', password: '' }); // Clear form fields
//       onClose(); // Close modal on success
//     } catch (error) {
//       setErrorMessage('Signup failed. Please try again.');
//     }
//   }

//   // Login handler using AuthContext's login function
//   async function handleLogin() {
//     if (!accountFormData.email || !accountFormData.password) {
//       setErrorMessage('Please complete all fields.');
//       return;
//     }

//     try {
//       await login(accountFormData.email, accountFormData.password);
//       setAccountFormData({ name: '', email: '', password: '' }); // Clear form fields
//       onClose(); // Close modal on success
//     } catch (error) {
//       setErrorMessage('Login failed. Please check your credentials.');
//     }
//   }

//   // Send verification code handler
//   async function handleSendVerificationCode() {
//     if (!accountFormData.email) {
//       setErrorMessage('Please enter your email.');
//       return false;
//     }

//     try {
//       await sendResetPasswordEmail(accountFormData.email);
//       alert('Verification code sent to your email.');
//       return true;
//     } catch (error) {
//       setErrorMessage('Failed to send verification code. Please try again.');
//       return false;
//     }
//   }

//   // Verify code handler
//   async function handleVerifyCode(verificationCode) {
//     if (!verificationCode) {
//       setErrorMessage('Please enter the verification code.');
//       return false;
//     }

//     try {
//       await verifyCode(accountFormData.email, verificationCode);
//       // alert('Verification code verified successfully!');
//       setVerificationCode(verificationCode); // Save verification
//       return true;
//     } catch (error) {
//       setErrorMessage('Failed to verify code. Please try again.');
//       return false;
//     }
//   }

//   // Reset password handler
//   async function handleResetPassword(newPassword, confirmPassword) {
//     if (!newPassword || !confirmPassword) {
//       setErrorMessage('Please complete all fields.');
//       return false;
//     }

//     if (newPassword !== confirmPassword) {
//       setErrorMessage('Passwords do not match.');
//       return false;
//     }

//     try {
//       await resetPassword(accountFormData.email, verificationCode, newPassword, confirmPassword);
//       alert('Password reset successfully!');
//       setAccountFormData({ name: '', email: '', password: '' }); // Clear form fields
//       onClose(); // Close modal on success
//       return true;
//     } catch (error) {
//       setErrorMessage('Failed to reset password. Please try again.');
//       return false;
//     }
//   }

//   const renderContent = () => {
//     if (isCreatingAccount) {
//       return (
//         <CreateAccountForm
//           accountFormData={accountFormData}
//           handleAccountFormChange={handleAccountFormChange}
//           handleSignup={handleSignup}
//           loginWithGoogle={loginWithGoogle}
//           setIsCreatingAccount={setIsCreatingAccount}
//           errorMessage={errorMessage}
//         />
//       );
//     }

//     if (isChangingPassword) {
//       return (
//         <ResetPasswordForm
//           accountFormData={accountFormData}
//           handleAccountFormChange={handleAccountFormChange}
//           handleSendVerificationCode={handleSendVerificationCode}
//           handleVerifyCode={handleVerifyCode}
//           handleResetPassword={handleResetPassword}
//           setIsChangingPassword={setIsChangingPassword}
//           errorMessage={errorMessage}
//         />
//       );
//     }

//     return (
//       <SignInForm
//         accountFormData={accountFormData}
//         handleAccountFormChange={handleAccountFormChange}
//         handleLogin={handleLogin}
//         loginWithGoogle={loginWithGoogle}
//         setIsCreatingAccount={setIsCreatingAccount}
//         setIsChangingPassword={setIsChangingPassword}
//         errorMessage={errorMessage}
//       />
//     );
//   };

//   return (
//     <Modal isOpen={isOpen} onClose={onClose} bgColor={'bg-foreground'}>
//       {renderContent()}
//     </Modal>
//   );
// }

import { useEffect, useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import Modal from '../Modal/Modal';
import CreateAccountForm from '../CreateAccountForm/CreateAccountForm';
import ResetPasswordForm from '../ResetPasswordForm/ResetPasswordForm';
import SignInForm from '../SignInForm/SignInForm';
import { useTranslations } from 'next-intl';

export default function LoginModal({ isOpen, onClose }) {
  const t = useTranslations('LoginModal'); // Translation namespace
  const { loginWithGoogle, signup, login, sendResetPasswordEmail, verifyCode, resetPassword } = useAuth();
  const [isCreatingAccount, setIsCreatingAccount] = useState(false);
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [accountFormData, setAccountFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [verificationCode, setVerificationCode] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Clear error message when user types
  useEffect(() => {
    if (errorMessage) {
      setErrorMessage('');
    }
  }, [accountFormData]);

  // Clear form data when modal is closed
  useEffect(() => {
    if (!isOpen) {
      setAccountFormData({ name: '', email: '', password: '' });
      setIsCreatingAccount(false);
      setIsChangingPassword(false);
    }
  }, [isOpen]);

  // Handle form input changes
  function handleAccountFormChange(e) {
    const { name, value } = e.target;
    setAccountFormData({
      ...accountFormData,
      [name]: value,
    });
  }

  // Signup handler using AuthContext's signup function
  async function handleSignup() {
    if (!accountFormData.name || !accountFormData.email || !accountFormData.password) {
      setErrorMessage(t('errors.completeFields'));
      return;
    }

    if (accountFormData.password.length < 6) {
      setErrorMessage(t('errors.passwordTooShort'));
      return;
    }

    try {
      await signup(accountFormData.name, accountFormData.email, accountFormData.password);
      alert(t('success.accountCreated'));
      setAccountFormData({ name: '', email: '', password: '' }); // Clear form fields
      onClose(); // Close modal on success
    } catch (error) {
      setErrorMessage(t('errors.signupFailed'));
    }
  }

  // Login handler using AuthContext's login function
  async function handleLogin() {
    if (!accountFormData.email || !accountFormData.password) {
      setErrorMessage(t('errors.completeFields'));
      return;
    }

    try {
      await login(accountFormData.email, accountFormData.password);
      setAccountFormData({ name: '', email: '', password: '' }); // Clear form fields
      onClose(); // Close modal on success
    } catch (error) {
      setErrorMessage(t('errors.loginFailed'));
    }
  }

  // Send verification code handler
  async function handleSendVerificationCode() {
    if (!accountFormData.email) {
      setErrorMessage(t('errors.enterEmail'));
      return false;
    }

    try {
      await sendResetPasswordEmail(accountFormData.email);
      alert(t('success.verificationSent'));
      return true;
    } catch (error) {
      setErrorMessage(t('errors.verificationFailed'));
      return false;
    }
  }

  // Verify code handler
  async function handleVerifyCode(verificationCode) {
    if (!verificationCode) {
      setErrorMessage(t('errors.enterVerificationCode'));
      return false;
    }

    try {
      await verifyCode(accountFormData.email, verificationCode);
      setVerificationCode(verificationCode); // Save verification
      return true;
    } catch (error) {
      setErrorMessage(t('errors.verificationFailed'));
      return false;
    }
  }

  // Reset password handler
  async function handleResetPassword(newPassword, confirmPassword) {
    if (!newPassword || !confirmPassword) {
      setErrorMessage(t('errors.completeFields'));
      return false;
    }

    if (newPassword !== confirmPassword) {
      setErrorMessage(t('errors.passwordMismatch'));
      return false;
    }

    try {
      await resetPassword(accountFormData.email, verificationCode, newPassword, confirmPassword);
      alert(t('success.passwordReset'));
      setAccountFormData({ name: '', email: '', password: '' }); // Clear form fields
      onClose(); // Close modal on success
      return true;
    } catch (error) {
      setErrorMessage(t('errors.passwordResetFailed'));
      return false;
    }
  }

  const renderContent = () => {
    if (isCreatingAccount) {
      return (
        <CreateAccountForm
          accountFormData={accountFormData}
          handleAccountFormChange={handleAccountFormChange}
          handleSignup={handleSignup}
          loginWithGoogle={loginWithGoogle}
          setIsCreatingAccount={setIsCreatingAccount}
          errorMessage={errorMessage}
        />
      );
    }

    if (isChangingPassword) {
      return (
        <ResetPasswordForm
          accountFormData={accountFormData}
          handleAccountFormChange={handleAccountFormChange}
          handleSendVerificationCode={handleSendVerificationCode}
          handleVerifyCode={handleVerifyCode}
          handleResetPassword={handleResetPassword}
          setIsChangingPassword={setIsChangingPassword}
          errorMessage={errorMessage}
        />
      );
    }

    return (
      <SignInForm
        accountFormData={accountFormData}
        handleAccountFormChange={handleAccountFormChange}
        handleLogin={handleLogin}
        loginWithGoogle={loginWithGoogle}
        setIsCreatingAccount={setIsCreatingAccount}
        setIsChangingPassword={setIsChangingPassword}
        errorMessage={errorMessage}
      />
    );
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} bgColor={'bg-foreground'}>
      {renderContent()}
    </Modal>
  );
}


