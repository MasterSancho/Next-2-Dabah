import img from 'next/image';
import styles from '@/styles/Carousel.module.css';

export default function Carousel() {
 return (
  <div className={styles.container}>
   <div className={styles.carousel}>
    <div className={styles.carousel__face}>
     <span className={styles.span}>This is something</span>
    </div>
    <div className={styles.carousel__face}>
     <span className={styles.span}>Very special</span>
    </div>
    <div className={styles.carousel__face}>
     <span className={styles.span}>Special is the key</span>
    </div>
    <div className={styles.carousel__face}>
     <span className={styles.span}>For you</span>
    </div>
    <div className={styles.carousel__face}>
     <span className={styles.span}>Just give it</span>
    </div>
    <div className={styles.carousel__face}>
     <span className={styles.span}>A try</span>
    </div>
    <div className={styles.carousel__face}>
     <span className={styles.span}>And see</span>
    </div>
    <div className={styles.carousel__face}>
     <span className={styles.span}>How IT Works</span>
    </div>
    <div className={styles.carousel__face}>
     <span className={styles.span}>Woow</span>
    </div>
   </div>
  </div>
 );
}
