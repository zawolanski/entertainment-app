import Card from '@/components/Card/Card';
import Heading from '@/components/Heading/Heading';

import { fetchData } from '../../helpers/fetchData';
import homeStyles from '../page.module.scss';
import styles from './series.module.scss';

const Series = async () => {
  const series = await fetchData('series');

  return (
    <div className={styles.container}>
      <Heading>TV Series</Heading>
      <div className={homeStyles.videosGrid}>
        {series.map((serial) => (
          <Card key={serial.title} {...serial} />
        ))}
      </div>
    </div>
  );
};

export default Series;
