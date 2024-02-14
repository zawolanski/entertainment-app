import Card from '@/components/Card/Card';
import Heading from '@/components/Heading/Heading';
import SearchWrapper from '@/components/SearchWrapper/SearchWrapper';
import TrendingCard from '@/components/TrendingCard/Trending';

import data from '../data/data.json';
import { Video } from '../data/types';
import styles from './page.module.scss';

const Home = () => {
  const parsedData = data as Video[];

  return (
    <div className={styles.wrapper}>
      <SearchWrapper />
      <div className={styles.trending}>
        <Heading>Trending</Heading>
        <div className={styles.trendingElements}>
          <TrendingCard {...parsedData[0]} />
          <TrendingCard {...parsedData[1]} />
          <TrendingCard {...parsedData[2]} />
          <TrendingCard {...parsedData[3]} />
        </div>
      </div>
      <div className={styles.recommended}>
        <Heading>Recommended for you</Heading>
        <div className={styles.videosGrid}>
          <Card {...parsedData[5]} />
          <Card {...parsedData[6]} />
          <Card {...parsedData[7]} />
          <Card {...parsedData[8]} />
          <Card {...parsedData[9]} />
          <Card {...parsedData[10]} />
          <Card {...parsedData[11]} />
        </div>
      </div>
    </div>
  );
};

export default Home;
