import clsx from 'clsx/lite';

import Movies from '@/icons/Movies';
import Oval from '@/icons/Oval';
import TVSeries from '@/icons/TVSeries';

import { Video } from '../../data/types';
import styles from './cardInformations.module.scss';

type Props = Pick<Video, 'category' | 'rating' | 'title' | 'year'> & {
  isAbsolute?: boolean;
};

const CardInformations = ({
  category,
  rating,
  title,
  year,
  isAbsolute = false,
}: Props) => {
  return (
    <div className={clsx(styles.information, isAbsolute && styles.absolute)}>
      <div className={styles.informationGeneral}>
        <span>{year}</span>
        <Oval className={styles.informationOval} />
        {category === 'movie' ? (
          <>
            <Movies className={styles.informationIcon} />
            <span>Movie</span>
          </>
        ) : (
          <>
            <TVSeries className={styles.informationIcon} />
            <span>TV Series</span>
          </>
        )}
        <Oval className={styles.informationOval} />
        <span>{rating}</span>
      </div>
      <h3 className={styles.informationHeading}>{title}</h3>
    </div>
  );
};

export default CardInformations;
