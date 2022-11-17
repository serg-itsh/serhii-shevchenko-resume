import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.container}>
        {/* <h1>About</h1> */}
        <ul className={styles.about_wrapper}>
          <li>
            <h2>SUMMARY</h2>
            <p className={styles.text}>
              I am a Front-End developer looking for a full-time position in a
              company that's aimed at making both everyday life and business
              easier, more productive and user-friendly. I have sound knowledge
              of HTML, CSS, JavaScript, and React. I am a fast learner,
              responsible, and ready for challenging tasks .
            </p>
          </li>
          <li>
            <h2>WORK EXPERIENCE</h2>
            <p className={styles.text}>
              <strong>Mechanic</strong> <br/>Cardboard and paper factory "Papir-Mal" | 2013-2022 Task
              coordination planning and final quality control of completed
              works. Development of drawings and design of machine parts.
              Installation of a cardboard machine. Modernization of equipment.
            </p>
          </li>
          <li>
            <h2>EDUCATION</h2>
            <p className={styles.text}>
              National Technical Univer sity of Ukraine "Kyiv Polytechnic
              Institute" 2006 - 2012 Mechanical engineer, specialty "Technology
              of machine-building"
            </p>
            <h2>ADDITIONAL EDUCATION</h2>
            <p className={styles.text}>
              <strong>IT School GoIT (Kyiv)</strong><br/>
               2022 Full Stack Developer
               
            </p>
            <p className={styles.text}>
            IT School
              Prometheus (Lviv) 2021 Bas i c Software Tes ting
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
