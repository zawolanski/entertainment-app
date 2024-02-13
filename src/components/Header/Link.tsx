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
    <NextLink
      href={href}
      className={clsx(styles.navListLink, pathhame === href && styles.active)}
    >
      <li aria-label={label}>{icon}</li>
    </NextLink>
  );
};

export default Link;
