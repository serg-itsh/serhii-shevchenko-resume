import styles from './NotFound.module.css';

const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <div className={styles.container}>
        <h1>Not found</h1>
        <p></p>
        <img
          src="https://media.tenor.com/9ud1r4sc-QQAAAAC/confused-john-travolta.gif"
          alt="confused-john-travolta"
          width={400}
        />
      </div>
    </div>
  );
};

export default NotFound;
