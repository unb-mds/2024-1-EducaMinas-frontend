// eslint-disable-next-line camelcase
import { Poppins } from 'next/font/google';
import type { Metadata } from 'next';
import Header from '../components/Header';
import '../styles/globals.css';
import { Toaster } from 'sonner';

const openSans = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Educa Minas',
  description: 'Dados Educação de Minas Gerais',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`flex flex-col h-min-screen w-full ${openSans.className}`}>
        <Header />
        <div className="w-full h-[calc(100vh-100px)]">{children}</div>
        <Toaster />
      </body>
    </html>
  );
}
