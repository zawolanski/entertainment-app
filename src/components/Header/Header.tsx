import Image from 'next/image';

import imgAvatar from '@/public/image-avatar.png';
import iconLogo from '@/public/logo.svg';

import { links } from './data';
import styles from './header.module.scss';
import Link from './Link';

const Header = () => {
  return (
    <header className={styles.header}>
      <Image src={iconLogo} alt="" className={styles.logo} />
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          {links.map((link) => (
            <Link key={link.href} {...link} />
          ))}
        </ul>
      </nav>
      <div className={styles.avatarContainer}>
        <Image src={imgAvatar} alt="" className={styles.avatar} />
      </div>
    </header>
  );
};

export default Header;
