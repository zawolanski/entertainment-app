'use client';

import clsx from 'clsx/lite';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';

import { links } from './data';
import styles from './header.module.scss';

type Props = (typeof links)[number];

const Link = ({ href, icon, label }: Props) => {
  const pathhame = usePathname();

  return (
    <li>
      <NextLink
        href={href}
        aria-label={label}
        className={clsx(styles.navListLink, pathhame === href && styles.active)}
      >
        {icon}
      </NextLink>
    </li>
  );
};

export default Link;
