import Image from 'next/image';

import Movies from '@/icons/Movies';
import Oval from '@/icons/Oval';
import Play from '@/icons/Play';

import { Movie } from '../../data/types';
import Bookmark from '../Bookmark/Bookmark';
import styles from './card.module.scss';

type Props = Omit<Movie, 'thumbnail'> & { img: string };

const TrendingCard = ({
  title,
  year,
  rating,
  category,
  img,
  isBookmarked,
}: Props) => {
  return (
    <div className={styles.trendingContainer}>
      <div className={styles.container}>
        <Image src={img} alt="" className={styles.image} fill />
        <div className={styles.information}>
          <div className={styles.informationGeneral}>
            <span>{year}</span>
            <Oval className={styles.informationOval} />
            <Movies className={styles.informationIcon} />
            <span>{category}</span>
            <Oval className={styles.informationOval} />
            <span>{rating}</span>
          </div>
          <h3 className={styles.informationHeading}>{title}</h3>
        </div>
        <div className={styles.playContainer}>
          <Play className={styles.playIcon} />
          <span className={styles.playText}>Play</span>
        </div>
      </div>
      <Bookmark isBookmarked={isBookmarked} />
    </div>
  );
};

export default TrendingCard;
