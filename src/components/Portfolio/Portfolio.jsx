import styles from './Portfolio.module.css';
import Project_1 from '../../images/projects/markup-hw-08_1.jpg';
import Project_2 from '../../images/projects/icecream-team-project_02.1.jpg';
import Project_3 from '../../images/projects/team-03-pr-film_03.jpg';
import Project_4 from '../../images/projects/pro-test_04.jpg';

const Portfolio = () => {
  return (
    <div className={styles.portfolio}>
      <div className={styles.container}>
        <h1 className={styles.title}>Portfolio team projects</h1>
        

     

        <ul className={styles.portfolioBox}>

        <li className={styles.pictures}> 
        <p className={styles.text}>PRO-TEST</p>                       
            <img
            className={styles.picturesImg}
              src={Project_4}
              alt="project_pro-test"
            />
          </li>

        <li className={styles.pictures}>  
        <p className={styles.text}>FILMOTEKA</p>                      
            <img
            className={styles.picturesImg}
              src={Project_3}
              alt="project_filmoteka"
            />
          </li>

        <li className={styles.pictures}> 
        <p className={styles.text}>ICECREAM</p>                       
            <img
            className={styles.picturesImg}
              src={Project_2}
              alt="project_icecream"
            />
          </li>

          <li className={styles.pictures}>  
          <p className={styles.text}>WEB-STUDIO <br/> Own project</p>                      
            <img
            className={styles.picturesImg}
              src={Project_1}
              alt="project_web-studio"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Portfolio;
