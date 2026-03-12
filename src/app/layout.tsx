import type { Metadata } from 'next';
import { inter } from './fonts';
import './globals.css';
import Navbar from '@/components/Navbar';
import SocialSidebar from '@/components/SocialSidebar';

export const metadata: Metadata = {
  title: 'Sumit Singh | Data Engineer',
  description: 'Data Engineering Portfolio and Scrollytelling Showcase',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#121212] text-white antialiased`}>
        <Navbar />
        <SocialSidebar />
        {children}
      </body>
    </html>
  );
}
