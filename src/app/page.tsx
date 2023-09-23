import Image from 'next/image'
import styles from './page.module.css'
import HomeIntroduction from "@/app/_components/HomeIntroduction";
import React from "react";

export default function Home() {
  return (
    <main className={styles.main}>
        <HomeIntroduction/>
    </main>
  )
}
