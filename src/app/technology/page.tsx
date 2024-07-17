import Image from 'next/image'
import styles from './service.module.css'
export default function Home() {

  return (
    <>
      <div className={styles.herosection}>
          <h1>
            Our Technologies
          </h1>
          <div className={styles.tagline}>
            Let's discover the commercial oppurtunities of the digital world together.
          </div>
        </div>
        <div className={styles.sectionbox}>
          <div className={styles.serveBox}>
            <div className={styles.title}>Frontend</div>
            <div className={styles.ulli}>
              <li>React</li>
              <li>Angular</li>
            </div>
          </div>
          <div className={styles.serveBox}>
            <div className={styles.title}>Backend</div>
            <div className={styles.ulli}>
              <li>Java</li>
              <li>.NET</li>
              <li>Laravel</li>
              <li>Node.JS</li>
              <li>VB .Net</li>
            </div>
          </div>
          <div className={styles.serveBox}>
            <div className={styles.title}>Mobile</div>
            <div className={styles.ulli}>
              <li>React Native</li>
              <li>Ionic</li>
              <li>Flutter</li>
              <li>Xamarin</li>
              <li>iOS</li>
              <li>Android</li>
            </div>
          </div>
          <div className={styles.serveBox}>
            <div className={styles.title}>Platform</div>
            <div className={styles.ulli}>
              <li>Wordpress</li>
              <li>Joomla</li>
              <li>Drupal</li>
              <li>Sharepoint</li>
            </div>
          </div>
          <div className={styles.serveBox}>
            <div className={styles.title}>Cloud</div>
            <div className={styles.ulli}>
              <li>AWS</li>
              <li>Azure</li>
            </div>
          </div>
        </div>
    </>
  )
}
