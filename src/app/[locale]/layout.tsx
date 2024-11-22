import {notFound} from 'next/navigation';
import {getTranslations, setRequestLocale} from 'next-intl/server';
import {ReactNode} from 'react';
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {routing} from '../../i18n/routing';
import Footer from '../../components/Footer/Footer';
import {Kanit} from 'next/font/google';
import {AuthProvider} from '../../contexts/AuthContext';
import {BaziProvider} from '../../contexts/BaziContext';
import '../../app/globals.css';
import Script from 'next/script';
import NavBar from '../../components/Navbar/Navbar';
import {ModalProvider} from '../../contexts/ModalContext';

const kanit = Kanit({
  subsets: ['latin'],
  variable: '--font-kanit',
  display: 'swap',
  weight: '400',
});

type Props = {
  children: ReactNode;
  params: {locale: string};
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export async function generateMetadata({
  params: {locale}
}: Omit<Props, 'children'>) {
  const t = await getTranslations({locale, namespace: 'LocaleLayout'});

  return {
    title: t('title')
  };
}

export default async function LocaleLayout({
  children,
  params: {locale}
}: Props) {
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Enable static rendering for locale
  setRequestLocale(locale);

  // Fetch translations for the current locale
  const messages = await getMessages(locale as any);

  return (
    <html lang={locale} className={`${kanit.variable}`}>
      <head>
        <Script
          id="tawk-to"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
              (function(){
                var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
                s1.async = true;
                s1.src = 'https://embed.tawk.to/6711f1ab2480f5b4f58f5d6e/1iaf1g1va';
                s1.charset = 'UTF-8';
                s1.setAttribute('crossorigin', '*');
                s0.parentNode.insertBefore(s1, s0);
              })();
            `,
          }}
        />
      </head>
      <body>
        <AuthProvider>
          <BaziProvider>
            <ModalProvider>
              <NextIntlClientProvider messages={messages}>
                <div className="app-container">
                  <NavBar />
                  <main>{children}</main>
                  <footer>
                    <Footer />
                  </footer>
                </div>
              </NextIntlClientProvider>
            </ModalProvider>
          </BaziProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
