import Heading from '@/components/Heading/Heading';
import SearchWrapper from '@/components/SearchWrapper/SearchWrapper';

import styles from './page.module.scss';

const Home = () => {
  return (
    <main className={styles.main}>
      <SearchWrapper />
      <div className={styles.trending}>
        <Heading>Trending</Heading>
      </div>
      <div className={styles.recommended}>
        <Heading>Recommended for you</Heading>
      </div>
    </main>
  );
};

export default Home;
