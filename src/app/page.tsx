import Image from 'next/image'
import styles from './page.module.css'
import NavBar from './components/navBar';

export default function Home() {
  return (
    <>
      <div className={styles.herosection}>
        <h1>Where Software Meets Magic</h1>
        <div className={styles.tagline}>
          Spsolution is a specialized IT solutions provider committed to delivering cutting-edge services exclusively for clients. With a focus on precision, innovation, and efficiency, we strive to elevate the client satisfaction to new heights in the digital landscape.
        </div>
        <button className={styles.homebtn}>Get Started</button>
        <h3>We Believe In</h3>
      </div>

      <div className={styles.section}>
        <div className={styles.outerCard}>
          <div className={styles.innerCard}>
            <div className={styles.header}>client-Centric Approach</div>
            <div className={styles.content}>
            Our firm is dedicated to the success of Client. Every solution we provide is crafted with your business goals in mind, ensuring maximum value and impact.
            </div>
          </div>
        </div>

        <div className={styles.outerCard}>
          <div className={styles.innerCard}>
            <div className={styles.header}>Proven Track Record</div>
            <div className={styles.content}>
            Backed by a team of skilled professionals, we have a proven track record of delivering high-quality IT solutions that align with Client's firm's objectives.
            </div>
          </div>
        </div>

        <div className={styles.outerCard}>
          <div className={styles.innerCard}>
            <div className={styles.header}>Continuous Innovation</div>
            <div className={styles.content}>
            In the ever-evolving IT landscape, we stay ahead of the curve by embracing the latest technologies and methodologies. This ensures that Client's satisfaction remains at the forefront of innovation.</div>
          </div>
        </div>
      </div>
    </>
  )
}
