import Card from '@/components/Card/Card';
import Heading from '@/components/Heading/Heading';

import { fetchData } from '../../helpers/fetchData';
import homeStyles from '../page.module.scss';
import styles from './saved.module.scss';

const Bookmarked = async () => {
  const bookmarked = await fetchData('bookmarked');

  const movies = bookmarked.filter((b) => b.category === 'movie');
  const series = bookmarked.filter((b) => b.category === 'series');

  return (
    <div className={styles.container}>
      <Heading>Bookmarked Movies</Heading>
      <div className={homeStyles.videosGrid}>
        {movies.map((movie) => (
          <Card key={movie.title} {...movie} />
        ))}
      </div>
      <Heading>Bookmarked TV Series</Heading>
      <div className={homeStyles.videosGrid}>
        {series.map((serial) => (
          <Card key={serial.title} {...serial} />
        ))}
      </div>
    </div>
  );
};

export default Bookmarked;
