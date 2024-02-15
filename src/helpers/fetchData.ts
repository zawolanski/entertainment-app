import data from '../data/data.json';
import { Video } from '../data/types';

export type FilterKey = 'movies' | 'series' | 'bookmarked' | 'trending' | 'all';

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

const getFilteredData = (key: FilterKey, search?: string) => {
  let data: Video[] = [];

  switch (key) {
    case 'movies':
      data = getData().filter((item) => item.category === 'movie');
      break;
    case 'series':
      data = getData().filter((item) => item.category === 'series');
      break;
    case 'bookmarked':
      data = getData().filter((item) => item.isBookmarked);
      break;
    case 'trending':
      data = getData().filter((item) => item.isTrending);
      break;
    case 'all':
      data = getData();
      break;
    default:
      data = getData();
  }

  if (search)
    return data.filter((item) =>
      item.title.toLowerCase().startsWith(search.toLowerCase()),
    );

  return data;
};

export const fetchData = (
  key: FilterKey,
  search?: string,
): Promise<Video[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(getFilteredData(key, search));
    }, 1000);
  });
};
