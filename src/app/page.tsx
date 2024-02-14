import TrendingCard from '@/components/Card/Trending';
import Heading from '@/components/Heading/Heading';
import SearchWrapper from '@/components/SearchWrapper/SearchWrapper';

import data from '../data/data.json';
import { Movie } from '../data/types';
import styles from './page.module.scss';

const Home = () => {
  const parsedData = data as Movie[];

  console.log(parsedData[0].title);

  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <SearchWrapper />
        <div className={styles.trending}>
          <Heading>Trending</Heading>
          <div className={styles.trendingElements}>
            <TrendingCard
              {...parsedData[0]}
              img={parsedData[0].thumbnail.regular.large}
            />
            <TrendingCard
              {...parsedData[1]}
              img={parsedData[1].thumbnail.regular.large}
            />
            <TrendingCard
              {...parsedData[2]}
              img={parsedData[2].thumbnail.regular.large}
            />
            <TrendingCard
              {...parsedData[3]}
              img={parsedData[3].thumbnail.regular.large}
            />
          </div>
        </div>
        <div className={styles.recommended}>
          <Heading>Recommended for you</Heading>
        </div>
      </div>
    </main>
  );
};

export default Home;
