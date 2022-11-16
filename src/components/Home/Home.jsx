import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.container}>
        <h1>Home</h1>
        <img
          src="https://people.com/thmb/IhCtvQQ9cLuZgArpPa4FPvlCfEY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(749x0:751x2)/hgtv-dream-home-1-ce2570fdec9842839217546b36913d48.jpg"
          alt="home"
          width={500}
        />
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere laboriosam unde saepe magnam nulla illo reiciendis odio, modi amet. Iste incidunt reprehenderit corrupti natus labore sequi ab esse! Fuga, tempora!</p>
      </div>
    </div>
  );
};

export default Home;
