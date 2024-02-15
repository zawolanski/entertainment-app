import { Suspense } from 'react';

import Card from '@/components/Card/Card';
import Heading from '@/components/Heading/Heading';
import SearchInput from '@/components/SearchInput/SearchInput';
import SearchResults from '@/components/SearchResults/SearchResults';
import Spinner from '@/components/Spinner/Spinner';
import TrendingCard from '@/components/TrendingCard/Trending';

import { fetchData } from '../helpers/fetchData';
import styles from './page.module.scss';
import commonStyles from './styles/common.module.scss';

type Props = {
  searchParams?: {
    s?: string;
  };
};

const Home = async ({ searchParams }: Props) => (
  <div className={styles.wrapper}>
    <SearchInput
      label="Search for movies or TV series"
      placeholder="Search for movies or TV series"
    />
    {searchParams?.s ? (
      <Suspense key={searchParams?.s} fallback={<Spinner />}>
        <SearchResults search={searchParams?.s} filterKey="all" />
      </Suspense>
    ) : (
      <Content />
    )}
  </div>
);

const Content = async () => {
  const videos = await fetchData('all');

  const trendingVideos = videos.filter((v) => v.isTrending);
  const nonTrendingVideos = videos.filter((v) => !v.isTrending);

  return (
    <>
      <div className={styles.trending}>
        <Heading>Trending</Heading>
        <div className={styles.trendingElements}>
          {trendingVideos.map((video) => (
            <TrendingCard key={video.title} {...video} />
          ))}
        </div>
      </div>
      <div className={styles.recommended}>
        <Heading>Recommended for you</Heading>
        <div className={commonStyles.videosGrid}>
          {nonTrendingVideos.map((video) => (
            <Card key={video.title} {...video} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
