import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.heroWrapper}>
      <div className={styles.heroContainer}>
        <div className={styles.heroBg}></div>
        <div className={`paddings ${styles.heroContent}`}>
          <h1 className={styles.heading}>CLASSIC</h1>
          <h1 className={styles.heading}>DESIGNER SOFA</h1>
          <p className={styles.details}>Get 15% Off On Order Above $399</p>
          <button className="button">Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
