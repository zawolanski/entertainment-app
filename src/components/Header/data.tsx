import Home from '@/icons/Home';
import Movies from '@/icons/Movies';
import Saved from '@/icons/Saved';
import Series from '@/icons/Series';

import styles from './header.module.scss';

export const route = {
  home: '/',
  movies: '/movies',
  series: '/series',
  saved: '/saved',
} as const;

export const links = [
  {
    href: route.home,
    icon: <Home className={styles.navListIcon} />,
    label: 'Go to main page',
  },
  {
    href: route.movies,
    icon: <Movies className={styles.navListIcon} />,
    label: 'Go to movies page',
  },
  {
    href: route.series,
    icon: <Series className={styles.navListIcon} />,
    label: 'Go to TV Series page',
  },
  {
    href: route.saved,
    icon: <Saved className={styles.navListIcon} />,
    label: 'Go to bookmarked page',
  },
];
