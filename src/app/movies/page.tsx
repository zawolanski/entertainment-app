import Card from '@/components/Card/Card';
import Heading from '@/components/Heading/Heading';

import { fetchData } from '../../helpers/fetchData';
import homeStyles from '../page.module.scss';
import styles from './movies.module.scss';

const Movies = async () => {
  const movies = await fetchData('movies');

  return (
    <div className={styles.container}>
      <Heading>Movies</Heading>
      <div className={homeStyles.videosGrid}>
        {movies.map((movie) => (
          <Card key={movie.title} {...movie} />
        ))}
      </div>
    </div>
  );
};

export default Movies;
