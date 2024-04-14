import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import '../styles/globals.css';
import Header from '../components/Header';

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '500', '800'],
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
      </body>
    </html>
  );
}
