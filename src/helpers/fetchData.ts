import data from '../data/data.json';
import { Video } from '../data/types';

type FilterKey = 'movies' | 'series' | 'bookmarked' | 'trending' | 'all';

const isValidCategory = (data: unknown): data is Video =>
  data !== null &&
  typeof data === 'object' &&
  'category' in data &&
  (data?.category === 'movie' || data?.category === 'series');

const getData = (): Video[] => {
  return data
    .map((d) => (isValidCategory(d) ? d : null))
    .filter((d) => d !== null) as Video[];
};

const getFilteredData = (key: FilterKey) => {
  switch (key) {
    case 'movies':
      return getData().filter((item) => item.category === 'movie');
    case 'series':
      return getData().filter((item) => item.category === 'series');
    case 'bookmarked':
      return getData().filter((item) => item.isBookmarked);
    case 'trending':
      return getData().filter((item) => item.isTrending);
    case 'all':
      return getData();
    default:
      return getData();
  }
};

export const fetchData = (key: FilterKey): Promise<Video[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(getFilteredData(key));
    }, 1500);
  });
};
