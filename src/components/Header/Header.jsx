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
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Shop</a>
          </li>
          <li>
            <a href="">Contact Us</a>
          </li>
          <li>
            <a className={styles.cart}>
              <IoCartOutline size={30} />
              <p>2</p>
            </a>
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
