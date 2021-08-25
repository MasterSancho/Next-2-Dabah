import Link from 'next/link';
import Styles from '@/styles/Services.module.css';

export default function Services() {
 return (
  <div className={Styles.container}>
   <h2>Card Content</h2>
   <p>Add containers inside the card to create different sections:</p>

   <div className={Styles.card - 4}>
    <header className={Styles.container}>
     <h1>Header</h1>
    </header>

    <div className={Styles.container}>
     <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
     </p>
    </div>

    <footer className={Styles.container}>
     <h5>Footer</h5>
    </footer>
   </div>
  </div>
 );
}
