import { Suspense } from 'react';

import Card from '@/components/Card/Card';
import Heading from '@/components/Heading/Heading';
import SearchInput from '@/components/SearchInput/SearchInput';
import SearchResults from '@/components/SearchResults/SearchResults';
import Spinner from '@/components/Spinner/Spinner';

import { fetchData } from '../../helpers/fetchData';
import homeStyles from '../page.module.scss';
import styles from './saved.module.scss';

type Props = {
  searchParams?: {
    s?: string;
  };
};

const Bookmarked = async ({ searchParams }: Props) => (
  <div className={styles.container}>
    <SearchInput
      label="Search for bookmarked shows"
      placeholder="Search for bookmarked shows"
    />
    {searchParams?.s ? (
      <Suspense key={searchParams?.s} fallback={<Spinner />}>
        <SearchResults search={searchParams?.s} filterKey="bookmarked" />
      </Suspense>
    ) : (
      <Content />
    )}
  </div>
);

const Content = async () => {
  const bookmarked = await fetchData('bookmarked');

  const movies = bookmarked.filter((b) => b.category === 'movie');
  const series = bookmarked.filter((b) => b.category === 'series');

  return (
    <>
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
    </>
  );
};

export default Bookmarked;
