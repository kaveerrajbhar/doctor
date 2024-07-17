import Image from 'next/image'
import styles from './about.module.css'
export default function Home() {

  return (
    <>
      <div className={styles.herosection}>
          <h1>
            Contact Us
          </h1>
          <div className={styles.tagline}>
            Lets connect for better connection.
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.lBar}>
            <iframe
              width="450"
              height="450"
              loading="lazy"
              allowfullscreen
              referrerpolicy="no-referrer-when-downgrade"
              // src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/pass/GoogleMapTA.jpg">
              src="image.png">
            </iframe>
          </div>
          <div className={styles.rBar}>
            <p>
              Address: B-14 Tulsi Duplex, Behind Sahyog Garden Gorwa, Vadodara Gujarat india
              Pin code : 390016
              <br/>
              Phone :+91 9898061312 
              <br/>
              {/* Email : jayshree.reddy@jaisaiinfotech.com */}
            </p>
          </div>
        </div>
    </>
  )
}
