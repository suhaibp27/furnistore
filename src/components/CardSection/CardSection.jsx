import React from "react";
import styles from "./CardSection.module.css";
import sofa1 from "../../assets/sofa1.png";
import chair1 from "../../assets/chair1.png";

const CardSection = () => {
  return (
    <div className={styles.cWrapper}>
      <div className={`flexCenter paddings innerWidth ${styles.cContainer}`}>
        <div className={styles.leftSection}>
          <div className={styles.leftContainer}>
            <p className={styles.para}>Seating</p>
            <h3 className={styles.heading}>New Collection</h3>
            <button className="button">Shop Now</button>
          </div>
          <img className={styles.chairImg} src={chair1} alt="Chair img" />
        </div>
        <div className={styles.rightSection}>
          <div className={styles.rightContainer}>
            <p className={styles.para}>Modern</p>
            <h3 className={styles.heading}>Sofa Furniture</h3>
            <button className="button">Shop Now</button>
          </div>
          <img className={styles.sofaImg} src={sofa1} alt="Sofa image" />
        </div>
      </div>
    </div>
  );
};

export default CardSection;
