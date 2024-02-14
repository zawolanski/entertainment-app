import BookmarkEmpty from '@/icons/BookmarkEmpty';
import BookmarkFull from '@/icons/BookmarkFull';

import styles from './bookmark.module.scss';

type Props = {
  isBookmarked: boolean;
};

const Bookmark = ({ isBookmarked }: Props) => {
  return (
    <button className={styles.button}>
      {isBookmarked ? <BookmarkFull /> : <BookmarkEmpty />}
    </button>
  );
};

export default Bookmark;
