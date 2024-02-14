import './globals.scss';

import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';

import Header from '@/components/Header/Header';

import styles from './page.module.scss';

const outfit = Outfit({ subsets: ['latin'], weight: ['300', '500'] });

export const metadata: Metadata = {
  title: 'Entertainment APP',
  description: 'The best source of your favorites movies',
};

type Props = Readonly<{
  children: React.ReactNode;
}>;

const RootLayout = ({ children }: Props) => {
  return (
    <html lang="en" className={outfit.className}>
      <body>
        <div className={styles.mainContainer}>
          <Header />
          <main className={styles.main}>{children}</main>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
