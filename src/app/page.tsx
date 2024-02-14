import Card from '@/components/Card/Card';
import Heading from '@/components/Heading/Heading';
import SearchWrapper from '@/components/SearchWrapper/SearchWrapper';
import TrendingCard from '@/components/TrendingCard/Trending';

import { fetchData } from '../helpers/fetchData';
import styles from './page.module.scss';

const Home = async () => {
  const videos = await fetchData('all');

  const trendingVideos = videos.filter((v) => v.isTrending);
  const nonTrendingVideos = videos.filter((v) => !v.isTrending);

  return (
    <div className={styles.wrapper}>
      <SearchWrapper />
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
        <div className={styles.videosGrid}>
          {nonTrendingVideos.map((video) => (
            <Card key={video.title} {...video} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
