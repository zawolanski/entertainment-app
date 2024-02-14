import clsx from 'clsx/lite';

import styles from './icons.module.scss';
import { IconProps } from './types';

const Spinner = ({ className }: IconProps) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <style></style>
    <circle className={styles.circle} cx="4" cy="12" r="3" />
    <circle
      className={clsx(styles.circle, styles.circle2)}
      cx="12"
      cy="12"
      r="3"
    />
    <circle
      className={clsx(styles.circle, styles.circle3)}
      cx="20"
      cy="12"
      r="3"
    />
  </svg>
);

export default Spinner;
