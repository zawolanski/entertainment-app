import Image from 'next/image';

import { Video } from '../../data/types';
import Bookmark from '../Bookmark/Bookmark';
import CardInformations from '../CardInformations/CardInformations';
import Play from '../Play/Play';
import styles from './trending.module.scss';

type Props = Video;

const TrendingCard = ({ image, isBookmarked, ...rest }: Props) => {
  return (
    <div className={styles.trendingContainer}>
      <div className={styles.container}>
        <Image
          src={image}
          alt=""
          className={styles.image}
          fill
          loading="eager"
        />
        <CardInformations isAbsolute {...rest} />
        <Play className={styles.playContainer} />
      </div>
      <Bookmark isBookmarked={isBookmarked} videoName={rest.title} />
    </div>
  );
};

export default TrendingCard;
