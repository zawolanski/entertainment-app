import styles from './heading.module.scss';

type Props = {
  children: string;
};

const Heading = ({ children }: Props) => {
  return <h2 className={styles.heading}>{children}</h2>;
};

export default Heading;
