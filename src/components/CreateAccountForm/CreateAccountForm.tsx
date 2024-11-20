import Image from 'next/image';
import googleLogo from '../../../public/google-icon.png';
import { useTranslations } from 'next-intl';

export default function CreateAccountForm({
  accountFormData,
  handleAccountFormChange,
  handleSignup,
  loginWithGoogle,
  setIsCreatingAccount,
  errorMessage,
}) {
  const t = useTranslations('CreateAccountForm'); // Namespace for translations

  return (
    <div className="text-background flex flex-col justify-center items-center p-24">
      <h1 className="text-2xl text-center mb-4">{t('title')}</h1>
      <div className="flex space-x-2 mb-8">
        <p className="text-nowrap">{t('haveAccount')}</p>
        <button
          className="underline text-nowrap cursor-pointer"
          onClick={() => setIsCreatingAccount(false)}
        >
          {t('signIn')}
        </button>
      </div>
      <div className="flex flex-col space-y-2 min-w-64">
        <input
          type="text"
          name="name"
          placeholder={t('placeholders.username')}
          className="p-2 rounded-custom bg-foreground text-background border-4 border-bStart"
          value={accountFormData.name}
          onChange={handleAccountFormChange}
        />
        <input
          type="email"
          name="email"
          placeholder={t('placeholders.email')}
          className="p-2 rounded-custom bg-foreground text-background border-4 border-bStart"
          value={accountFormData.email}
          onChange={handleAccountFormChange}
        />
        <input
          type="password"
          name="password"
          placeholder={t('placeholders.password')}
          className="p-2 rounded-custom bg-foreground text-background border-4 border-bStart"
          value={accountFormData.password}
          onChange={handleAccountFormChange}
        />
      </div>
      <button
        className="w-full bg-gradient-to-r from-bStart to-bEnd text-white py-2 rounded-lg mt-12 shadow-button hover:opacity-90"
        onClick={handleSignup}
      >
        {t('createAccountButton')}
      </button>
      {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
      <div className="flex">
        <p className="mt-2">{t('or')}</p>
      </div>
      <button
        className="w-full border-bStart border-4 rounded-lg mt-2 px-2 py-1 shadow-button hover:opacity-75 cursor-pointer"
        onClick={loginWithGoogle}
      >
        <div className="flex items-center justify-center whitespace-nowrap">
          <Image src={googleLogo} alt={t('googleAlt')} width="30" height="30" />
          <p className="hidden md:block md:ml-2">{t('continueWithGoogle')}</p>
        </div>
      </button>
    </div>
  );
}
