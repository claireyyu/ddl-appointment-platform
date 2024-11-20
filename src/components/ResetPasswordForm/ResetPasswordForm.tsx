import { useState } from 'react';
import LoadingAnimation from '../LoadingAnimation/LoadingAnimation';
import { useTranslations } from 'next-intl';

export default function ResetPasswordForm({
  accountFormData,
  handleAccountFormChange,
  handleSendVerificationCode,
  handleVerifyCode,
  handleResetPassword,
  setIsChangingPassword,
  errorMessage,
}) {
  const t = useTranslations('ResetPasswordForm'); // Namespace for translations
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [isCodeVerified, setIsCodeVerified] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSendCode = async () => {
    setIsSubmitting(true);
    const success = await handleSendVerificationCode();
    if (success) {
      setIsCodeSent(true);
    }
    setIsSubmitting(false);
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
      {!isCodeSent && (
        <div className="flex flex-col min-w-64">
          <h1 className="text-2xl text-center mb-4">{t('resetPassword')}</h1>
          <input
            type="email"
            name="email"
            placeholder={t('emailPlaceholder')}
            className="p-2 rounded-custom bg-foreground text-background border-4 border-bStart"
            value={accountFormData.email}
            onChange={handleAccountFormChange}
          />
          <button
            className={`w-full bg-gradient-to-r from-bStart to-bEnd text-white py-2 rounded-lg mt-8 shadow-button hover:opacity-90 ${
              isSubmitting ? 'cursor-not-allowed' : ''
            }`}
            onClick={handleSendCode}
            disabled={isSubmitting}
          >
            {isSubmitting ? <LoadingAnimation title={t('sending')} /> : t('sendVerificationCode')}
          </button>
        </div>
      )}

      {isCodeSent && !isCodeVerified && (
        <div className="flex flex-col min-w-64">
          <h1 className="text-2xl text-center mb-4">{t('verifyCode')}</h1>
          <input
            type="text"
            name="verificationCode"
            placeholder={t('verificationCodePlaceholder')}
            className="p-2 rounded-custom bg-foreground text-background border-4 border-bStart"
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
          />
          <button
            className="w-full bg-gradient-to-r from-bStart to-bEnd text-white py-2 rounded-lg mt-8 shadow-button hover:opacity-90"
            onClick={handleConfirmCode}
          >
            {t('confirmCode')}
          </button>
          <button className="text-center cursor-pointer mt-4" onClick={handleSendCode}>
            {t('resendCode')}
          </button>
        </div>
      )}

      {isCodeVerified && (
        <div className="flex flex-col min-w-64">
          <h1 className="text-2xl text-center mb-4">{t('changePassword')}</h1>
          <input
            type="password"
            name="newPassword"
            placeholder={t('newPasswordPlaceholder')}
            className="p-2 rounded-custom bg-foreground text-background border-4 border-bStart mb-4"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder={t('confirmPasswordPlaceholder')}
            className="p-2 rounded-custom bg-foreground text-background border-4 border-bStart"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button
            className={`w-full bg-gradient-to-r from-bStart to-bEnd text-white py-2 rounded-lg mt-8 shadow-button hover:opacity-90`}
            onClick={handleChangePassword}
          >
            {t('confirmChange')}
          </button>
        </div>
      )}

      <button className="text-start cursor-pointer mt-4" onClick={() => setIsChangingPassword(false)}>
        {t('backToSignIn')}
      </button>

      {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
    </div>
  );
}
