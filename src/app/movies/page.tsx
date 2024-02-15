import { Suspense } from 'react';

import Card from '@/components/Card/Card';
import Heading from '@/components/Heading/Heading';
import SearchInput from '@/components/SearchInput/SearchInput';
import SearchResults from '@/components/SearchResults/SearchResults';
import Spinner from '@/components/Spinner/Spinner';

import { fetchData } from '../../helpers/fetchData';
import commonStyles from '../styles/common.module.scss';
import styles from './movies.module.scss';

type Props = {
  searchParams?: {
    s?: string;
  };
};

const Movies = async ({ searchParams }: Props) => (
  <div className={styles.container}>
    <SearchInput label="Search for movies" placeholder="Search for movies" />
    {searchParams?.s ? (
      <Suspense key={searchParams?.s} fallback={<Spinner />}>
        <SearchResults search={searchParams?.s} filterKey="movies" />
      </Suspense>
    ) : (
      <Content />
    )}
  </div>
);

const Content = async () => {
  const movies = await fetchData('movies');

  return (
    <>
      <Heading>Movies</Heading>
      <div className={commonStyles.videosGrid}>
        {movies.map((movie) => (
          <Card key={movie.title} {...movie} />
        ))}
      </div>
    </>
  );
};

export default Movies;
