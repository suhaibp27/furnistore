import styles from "./Header.module.css";
import { IoCartOutline } from "react-icons/io5";
import { LuSofa } from "react-icons/lu";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <div className={styles.hWrapper}>
      <div className={`innerWidth ${styles.hContainer}`}>
        <h3 className={styles.logo}>
          <LuSofa className={styles.logoIcon} size={30} />
          FURNISTORE
        </h3>
        <ul
          className={
            showMenu ? `${styles.menu} ${styles.active}` : `${styles.menu}`
          }
        >
          <li>
            <p>Home</p>
          </li>
          <li>
            <p>About</p>
          </li>
          <li>
            <p>Shop</p>
          </li>
          <li>
            <p>Contact Us</p>
          </li>
          <li>
            <p className={styles.cart}>
              <IoCartOutline size={30} />
              <span>2</span>
            </p>
          </li>
        </ul>

        <div className={styles.toggleButtons} onClick={handleClick}>
          {showMenu ? (
            <FaTimes className={styles.closeButton} size={30} />
          ) : (
            <FaBars size={30} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
