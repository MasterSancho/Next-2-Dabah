import Carousel from './Carousel';
import styles from '@/styles/Showcase.module.css';

export default function Showcase() {
 return (
  <div className={styles.showcase}>
   <h1>בניית ציפורניים בג'ל</h1>
   <h2>מעיין דבח</h2>
   <Carousel />
  </div>
 );
}
