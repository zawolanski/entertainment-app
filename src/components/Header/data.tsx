import Home from '@/icons/Home';
import Movies from '@/icons/Movies';
import Saved from '@/icons/Saved';
import Series from '@/icons/Series';

export const route = {
  home: '/',
  movies: '/movies',
  series: '/series',
  saved: '/saved',
} as const;

export const links = [
  {
    href: route.home,
    icon: <Home />,
    label: 'Home',
  },
  {
    href: route.movies,
    icon: <Movies />,
    label: 'Movies',
  },
  {
    href: route.series,
    icon: <Series />,
    label: 'TV Series',
  },
  {
    href: route.saved,
    icon: <Saved />,
    label: 'Bookmarked',
  },
];
