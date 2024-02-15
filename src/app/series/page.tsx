import { Suspense } from 'react';

import Card from '@/components/Card/Card';
import Heading from '@/components/Heading/Heading';
import SearchInput from '@/components/SearchInput/SearchInput';
import SearchResults from '@/components/SearchResults/SearchResults';
import Spinner from '@/components/Spinner/Spinner';

import { fetchData } from '../../helpers/fetchData';
import homeStyles from '../page.module.scss';
import styles from './series.module.scss';

type Props = {
  searchParams?: {
    s?: string;
  };
};

const Series = async ({ searchParams }: Props) => (
  <div className={styles.container}>
    <SearchInput
      label="Search for TV series"
      placeholder="Search for TV series"
    />
    {searchParams?.s ? (
      <Suspense key={searchParams?.s} fallback={<Spinner />}>
        <SearchResults search={searchParams?.s} filterKey="series" />
      </Suspense>
    ) : (
      <Content />
    )}
  </div>
);

const Content = async () => {
  const series = await fetchData('series');

  return (
    <>
      <Heading>TV Series</Heading>
      <div className={homeStyles.videosGrid}>
        {series.map((serial) => (
          <Card key={serial.title} {...serial} />
        ))}
      </div>
    </>
  );
};

export default Series;
