import Image from 'next/image';

import { Video } from '../../data/types';
import Bookmark from '../Bookmark/Bookmark';
import CardInformations from '../CardInformations/CardInformations';
import Play from '../Play/Play';
import styles from './card.module.scss';

type Props = Video;

const Card = ({ image, isBookmarked, ...rest }: Props) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imageContainer}>
        <Image src={image} alt="" className={styles.image} fill />
        <Play className={styles.playContainer} />
      </div>
      <Bookmark isBookmarked={isBookmarked} videoName={rest.title} />
      <CardInformations {...rest} />
    </div>
  );
};

export default Card;
