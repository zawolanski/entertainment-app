import SpinnerIcon from '@/icons/Spinner';

import styles from './spinner.module.scss';

const Spinner = () => {
  return (
    <div className={styles.loadingWrapper}>
      <SpinnerIcon className={styles.spinner} />
    </div>
  );
};

export default Spinner;
