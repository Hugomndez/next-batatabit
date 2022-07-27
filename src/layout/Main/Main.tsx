import styles from './Main.module.css';

type Props = {
  children?: React.ReactNode;
};

const Main: React.FC<Props> = ({ children }) => {
  return <main className={styles.main}>{children}</main>;
};

export default Main;
