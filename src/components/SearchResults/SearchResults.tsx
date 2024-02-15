import commonStyles from '../../app/styles/common.module.scss';
import { fetchData, FilterKey } from '../../helpers/fetchData';
import Card from '../Card/Card';
import Heading from '../Heading/Heading';
import styles from './searchResults.module.scss';

type Props = {
  search?: string;
  filterKey: FilterKey;
};

const Recommended = async ({ search, filterKey }: Props) => {
  const videos = await fetchData(filterKey, search);

  return (
    <div className={styles.recommended}>
      <Heading>{`Found ${videos.length} results for '${search}'`}</Heading>
      <div className={commonStyles.videosGrid}>
        {videos.map((video) => (
          <Card key={video.title} {...video} />
        ))}
      </div>
    </div>
  );
};

export default Recommended;
