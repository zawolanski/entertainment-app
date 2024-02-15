import BookmarkEmpty from '@/icons/BookmarkEmpty';
import BookmarkFull from '@/icons/BookmarkFull';

import styles from './bookmark.module.scss';

type Props = {
  isBookmarked: boolean;
  videoName: string;
};

const Bookmark = ({ isBookmarked, videoName }: Props) => {
  return (
    <button
      className={styles.button}
      aria-label={
        isBookmarked
          ? `Remove ${videoName} from bookmarked elements`
          : `Add ${videoName} to the bookmarked elements`
      }
    >
      {isBookmarked ? <BookmarkFull /> : <BookmarkEmpty />}
    </button>
  );
};

export default Bookmark;
