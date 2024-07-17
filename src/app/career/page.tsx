import Image from 'next/image'
import styles from './career.module.css'
import Careerlist from './career.list';


export default function Home() {

  return (
    <>
      <div className={styles.herosection}>
          <h1>
            Careers We Offer
          </h1>
          <div className={styles.tagline}>
            Explore the oppurtunities with us.
          </div>
        </div>
        <div className={styles.circleTop}>
         <div className={styles.circleInner}>
           <img src="/logo.png"/>
         </div>
         <Careerlist/>
        </div>
    </>
  )
}
