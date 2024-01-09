import styles from "./Products.module.css";
import { FaStar } from "react-icons/fa";

const Products = ({ items }) => {
  return (
    <div className={styles.productWrapper}>
      <div
        className={`flexColCenter paddings innerWidth ${styles.productContainer}`}
      >
        <p className={styles.para}>Latest Items</p>
        <h2 className={styles.heading}>Trendy Products</h2>
        <div className={styles.cardContainer}>
          {items.map((item) => (
            <div key={item.id} className={styles.card}>
              <img
                className={styles.cardImg}
                src={item.img_url}
                alt={item.title}
              />
              <p>{item.title}</p>
              <p>$ {item.price}</p>
              <div className={styles.rating}>
                {[...Array(item.rating)].map((star, i) => (
                  <FaStar className={styles.star} size={15} key={i} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
