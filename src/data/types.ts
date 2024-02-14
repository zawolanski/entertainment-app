export type VideoType = 'movie' | 'series';

export type Video = {
  title: string;
  image: string;
  year: number;
  category: VideoType;
  rating: string;
  isBookmarked: boolean;
  isTrending: boolean;
};
