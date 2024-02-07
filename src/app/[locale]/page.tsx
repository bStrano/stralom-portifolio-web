import styles from '../page.module.css'
import HomeIntroduction from "@/app/_components/HomeIntroduction";
import React from "react";
import '../../config/firebase.config'

export default function Home() {
  return (
    <main className={styles.main}>
        <HomeIntroduction/>
    </main>
  )
}
