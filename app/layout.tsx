import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import TanStackProvider from '@/components/TanStackProvider/TanStackProvider';
import { Comfortaa } from 'next/font/google';
import AuthProvider from '@/components/AuthProvider/AuthProvider';

const comfortaa = Comfortaa({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-roboto',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'NoteyPop',
  description: 'Save and sort your notes/todos/tasks',
  openGraph: {
    title: 'NoteyPop - best notes app',
    description: 'NoteyPop is an answer to your procrastination struggles.',
    url: 'https://notehub.com/',
    images: [
      {
        url: 'https://ac.goit.global/fullstack/react/notehub-og-meta.jpg',
        width: 1200,
        height: 630,
        alt: 'Notepad',
      },
    ],
  },
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={comfortaa.variable}>
      
        <TanStackProvider>
          <AuthProvider>
            <Header />
            <main className="appMain">{children}</main>
            {modal}
            <Footer />
          </AuthProvider>
        </TanStackProvider>
      </body>
    </html>
  );
}
