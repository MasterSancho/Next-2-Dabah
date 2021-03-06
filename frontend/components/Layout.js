import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from './Header';
import Footer from './Footer';
import Showcase from './Showcase';
import Services from './Services';
import styles from '@/styles/Layout.module.css';

export default function Layout({ title, keywords, description, children }) {
 const router = useRouter();

 return (
  <div>
   <Head>
    <title>{title}</title>
    <meta name='description' content={description} />
    <meta name='keywords' content={keywords} />
   </Head>

   <Header />

   {router.pathname === '/' && <Showcase />}

   <Services />

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
