import Card from '@/components/Card/Card';
import Heading from '@/components/Heading/Heading';
import SearchWrapper from '@/components/SearchWrapper/SearchWrapper';
import TrendingCard from '@/components/TrendingCard/Trending';

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
          <div className={styles.recommendedElements}>
            <Card
              {...parsedData[5]}
              img={parsedData[5].thumbnail.regular.large}
            />
            <Card
              {...parsedData[6]}
              img={parsedData[6].thumbnail.regular.large}
            />
            <Card
              {...parsedData[7]}
              img={parsedData[7].thumbnail.regular.large}
            />
            <Card
              {...parsedData[8]}
              img={parsedData[8].thumbnail.regular.large}
            />
            <Card
              {...parsedData[9]}
              img={parsedData[9].thumbnail.regular.large}
            />
            <Card
              {...parsedData[10]}
              img={parsedData[10].thumbnail.regular.large}
            />
            <Card
              {...parsedData[11]}
              img={parsedData[11].thumbnail.regular.large}
            />
            <Card
              {...parsedData[11]}
              img={parsedData[11].thumbnail.regular.large}
            />
            <Card
              {...parsedData[11]}
              img={parsedData[11].thumbnail.regular.large}
            />
            <Card
              {...parsedData[11]}
              img={parsedData[11].thumbnail.regular.large}
            />
            <Card
              {...parsedData[11]}
              img={parsedData[11].thumbnail.regular.large}
            />
            <Card
              {...parsedData[11]}
              img={parsedData[11].thumbnail.regular.large}
            />
            <Card
              {...parsedData[11]}
              img={parsedData[11].thumbnail.regular.large}
            />
            <Card
              {...parsedData[11]}
              img={parsedData[11].thumbnail.regular.large}
            />
            <Card
              {...parsedData[11]}
              img={parsedData[11].thumbnail.regular.large}
            />
            <Card
              {...parsedData[11]}
              img={parsedData[11].thumbnail.regular.large}
            />
            <Card
              {...parsedData[11]}
              img={parsedData[11].thumbnail.regular.large}
            />
            <Card
              {...parsedData[11]}
              img={parsedData[11].thumbnail.regular.large}
            />
            <Card
              {...parsedData[11]}
              img={parsedData[11].thumbnail.regular.large}
            />
            <Card
              {...parsedData[11]}
              img={parsedData[11].thumbnail.regular.large}
            />
            <Card
              {...parsedData[11]}
              img={parsedData[11].thumbnail.regular.large}
            />
            <Card
              {...parsedData[11]}
              img={parsedData[11].thumbnail.regular.large}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
