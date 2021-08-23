import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import styles from '../styles/Layout.module.css';

export default function Layout({ title, keywords, description, children }) {
 return (
  <div>
   <Head>
    <title>{title}</title>
    <meta name='description' content={description} />
    <meta name='keywords' content={keywords} />
   </Head>

   <Header />
   <div className={styles.container}>{children}</div>
   <Footer />
  </div>
 );
}

Layout.defaultProps = {
 title: 'בניית ציפורניים | לק גל',
 description:
  'בניית ציפורניים קצרהארוכה 250₪₪280 | לק ג&#039;ל 120₪ | מילוי 130₪ | בנייה בפוליגל 280₪ | הסרת שער בלייזר 300₪550₪ | להזמנות חייגו עכשיו 054-800-2334',
 keywords:
  'בניית ציפורניים קצרהארוכה 250₪₪280 | לק ג&#039;ל 120₪ | מילוי 130₪ | בנייה בפוליגל 280₪ | הסרת שער בלייזר 300₪550₪ | להזמנות חייגו עכשיו 054-800-2334',
};
