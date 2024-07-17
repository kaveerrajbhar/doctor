// Ensure necessary imports are included
'use client'
import styles from './career.module.css';
import { useState } from 'react';

export default function Career() {
  // Initialize state with an empty string
  const [jTitle, setJTitle] = useState('');

  // Function to show resume modal and set job title
  function resumepopup(event) {
    const jobTitle = event.target.innerText;
    setJTitle(jobTitle);
    document.querySelector(".modalResr").classList.add("shown");
  }

  // Function to hide resume modal
  function resumepopuphi() {
    document.querySelector(".modalResr").classList.remove("shown");
  }

  return (
    <>
      {/* Left Circle */}
      <div className={styles.leftCirc}>
        <ul>
          <li>
            <button onClick={resumepopup}>Product Manager</button>
          </li>
          <li>
            <button onClick={resumepopup}>React Developer</button>
          </li>
        </ul>
      </div>

      {/* Right Circle */}
      <div className={styles.rightCirc}>
        <ul>
          <li>
            <button onClick={resumepopup}>PHP Developer</button>
          </li>
          <li>
            <button onClick={resumepopup}>Technical Lead</button>
          </li>
        </ul>
      </div>

      {/* Resume Modal */}
      <div className={`${styles.modalRes} modalResr`}>
        <button onClick={resumepopuphi}>x</button>
        <h1>{jTitle}</h1>
        <p>Resume Upload</p>
        <div className={styles.fileWrap}>
          <input type="file" placeholder="Resume Upload"/>
        </div>
      </div>
    </>
  );
}
