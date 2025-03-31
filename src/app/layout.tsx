import './globals.css';
import Modal from '@/components/common/modal';
import CoreProvider from '@/contexts/core-provider';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import type { Metadata } from 'next';
import localFont from 'next/font/local';

dayjs.locale('ko');

const pretendard = localFont({
  src: '../fonts/PretendardVariable.woff2',
  weight: '45 920',
  variable: '--font-pretendard',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${pretendard.className} font-sans`}>
        <CoreProvider>
          {children}
          <Modal />
        </CoreProvider>
      </body>
    </html>
  );
}
