'use client';
import styles from './component.module.css'
import { useState, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'

export default function Home() {
  var pathArr = ["/","/about","/technology","/career","/contact"];
  const router = useRouter()
  const pathname = usePathname()
  const [selNav,setSelNav] = useState(pathArr.indexOf(pathname)+1);
  async function clickMe(el){
    setSelNav(el.target.id);
    console.log(selNav);
    router.push(el.target.attributes.href.value);
  }

  return (
    <>
       <div className={styles.logos}>
          <img src="/logo.png"/>
        </div>
        <nav>
          <ul className={styles.actives+` `+styles.ulli+` `+styles["active"+selNav]}>
            <li href="/" className={selNav==1?styles["lAct"]:''} id="1" onClick={clickMe}>Home</li>
            <li href="/about" className={selNav==2?styles["lAct"]:''}  id="2" onClick={clickMe}>About</li>
            <li href="/technology" className={selNav==3?styles["lAct"]:''}  id="3" onClick={clickMe}>Technology</li>
            <li href="/career" className={selNav==4?styles["lAct"]:''}  id="4" onClick={clickMe}>Career</li>
            <li href="/contact" className={selNav==5?styles["lAct"]:''}  id="5" onClick={clickMe}>Contact</li>
          </ul>
        </nav>
    </>
  )
}
