import clsx from 'clsx/lite';

import PlayIcon from '@/icons/Play';

import styles from './play.module.scss';

type Props = {
  className?: string;
};

const Play = ({ className }: Props) => {
  return (
    <div className={clsx(styles.playContainer, className)}>
      <PlayIcon className={styles.playIcon} />
      <span className={styles.playText}>Play</span>
    </div>
  );
};

export default Play;
