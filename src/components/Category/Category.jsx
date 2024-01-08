import React from "react";
import styles from "./Category.module.css";
import data from "../../utils/categories";

const Category = () => {
  return (
    <div className={styles.cWrapper}>
      <div className={`flexColCenter paddings innerWidth ${styles.cContainer}`}>
        <p className={styles.para}>Best Items</p>
        <h3 className={styles.heading}>Top Category</h3>
        <div className={styles.cItems}>
          {data.map((item, i) => (
            <div className={styles.cCard} key={i}>
              <div className={styles.cIconContainer}>
                <div className={styles.cIcon}>{item.icon}</div>
              </div>
              <p className={styles.cName}>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
