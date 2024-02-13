import SearchWrapper from '@/components/SearchWrapper/SearchWrapper';

import styles from './page.module.scss';

const Home = () => {
  return (
    <main className={styles.main}>
      <SearchWrapper />
      Main
    </main>
  );
};

export default Home;
