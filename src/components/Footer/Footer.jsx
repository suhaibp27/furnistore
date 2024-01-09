import styles from "./Footer.module.css";
import { IoMdCall, IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <div className={styles.fWrapper}>
      <div className={`flexColCenter paddings innerWidth ${styles.fContainer}`}>
        <div className={styles.footerTop}>
          <div className={styles.footerTopLeft}>
            <h3 className={styles.footerLogo}>FURNISTORE</h3>
            <p className={styles.footerTagline}>
              Your One Stop Furniture Studio.
            </p>
            <p>212, ABC Street</p>
            <p>Mumbai, Maharashtra</p>
            <p className={styles.footerInfo}>
              <IoMdCall /> +91 12345 67890
            </p>
            <p className={styles.footerInfo}>
              <IoMdMail /> furnistore@gmail.com
            </p>
          </div>
          <div className={styles.footerTopRight}>
            <div>
              <h3>Information</h3>
              <p>About Us</p>
              <p>More Search</p>
              <p>Blog</p>
              <p>Testimonials</p>
              <p>Events</p>
            </div>
            <div>
              <h3>Helpful Links</h3>
              <p>Services</p>
              <p>Supports</p>
              <p>Terms and Condition</p>
              <p>Privacy Policy</p>
            </div>
            <div>
              <h3>Our Services</h3>
              <p>Brands List</p>
              <p>Order</p>
              <p>Return & Exchange</p>
              <p>Trending list</p>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>2023 &copy; furnitstore All Right Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
