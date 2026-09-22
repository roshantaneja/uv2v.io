import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from "@vercel/analytics/react"

export default function Home() {
  return (
<div className={styles.container}>
  <Head>
    <title>Yuvraj Taneja</title>
    <meta name="description" content="EECS student and Regents' Scholar at UC Berkeley passionate about technology, machine learning, and humanitarian work." />
    <link rel="icon" href="/favicon.ico" />
  </Head>

  <main className={styles.main}>
    <h1 className={styles.title}>
      Hello, I'm <a href="/Yuvraj Taneja CV.pdf" className={styles.resumeLink}>Yuvraj!</a>
      <span className={styles.tooltip}>Click my name for my resumé!</span>
    </h1>

    <p className={styles.description}>
      I'm an Electrical Engineering & Computer Sciences student and Regents' Scholar at UC Berkeley, passionate about technology, machine learning, and humanitarian work. I'm deeply involved in computer science, machine learning, and water accessibility projects.
    </p>

    <p className={styles.description}>
      As Youth President of Maji Wells, I've helped raise $250K and deploy 500+ rainwater harvesting units in Tanzania, cutting water-collection walks for 15,000+ Maasai people. At Sacred Heart Prep I captained the robotics program and was a 4x USA Water Polo Junior Olympian on a #2 ranked <a href="https://www.maxpreps.com/water-polo/25-26/rankings/1/" target="_blank" rel="noopener noreferrer" style={{color: '#F59E0B'}}> Water Polo</a> team.
    </p>

    <h2 className={styles.title}>Projects</h2>
    <div className={styles.grid}>
      <a href="https://map.uv2v.io" className={styles.card}>
        <h2>Interactive Rainwater Harvesting Map &rarr;</h2>
        <p>Interactive Map of Recently Deployed Rainwater Harvesting units in Tanzania!</p>
      </a>

      <a href="https://github.com/yuvrajy/clausewise" target="_blank" rel="noopener noreferrer" className={styles.card}>
        <h2>ClauseWise: Executable Contracts &rarr;</h2>
        <p>- Grand Prize & Sharpe Section Winner, Stanford LLM x Law Hackathon 2026</p>
        <p>- Turns legal contracts into executable state machines and translates them back to plain English</p>
      </a>

      <a href="https://github.com/yuvrajy/SomethingFishy" className={styles.card}>
        <h2>Something Fishy Game &rarr;</h2>
        <p>A digital recreation of the game "sounds fishy" to play with friends online!</p>
      </a>

      <a href="https://github.com/yuvrajy" target="_blank" rel="noopener noreferrer" className={styles.card}>
        <h2>My Github &rarr;</h2>
        <p>Check out my projects in machine learning, robotics, and more!</p>
      </a>

      <a href="/about" className={styles.card}>
        <h2>More About Me &rarr;</h2>
        <p>Learn about my achievements, leadership roles, and academic journey.</p>
      </a>

      {/* <a href="/blog" className={styles.card}>
        <h2>My Blog &rarr;</h2>
        <p>Sharing insights on technology, humanitarian work, and my experiences.</p>
      </a> */}
    </div>

    <h2 className={styles.title}>Publications</h2>
    <div className={styles.grid}>
    <a href="https://nhsjs.com/wp-content/uploads/2024/12/Image-Classification-on-Satellite-Imagery-for-Sustainable-Water-Harvesting-Placement-in-Indigenous-Communities-of-Northern-Tanzania.pdf" className={styles.card}>
        <h2>Remote Sensing and Machine Learning for Water Accessibility in Maasai Regions &rarr;</h2>
        <p>- Winner NeurIPS 2024 [Machine Learning for Social Impact High School Track]</p>
        <p>- Presented at NeurIPS Convention 2024 in Vancouver</p>
        <p>- US Patent Pending Number 63/703,232 “Dwelling Detection in Satellite Image Data Using a Model”</p>
        <p>- Presented at ML4EO 2024 Conference at Univ. of Exeter UK</p>
        <p>- Published in National High School Journal of Science [Dec 2024]</p>
      </a>

      <a href="https://nhsjs.com/wp-content/uploads/2024/10/Evaluating-the-Impact-of-Water-Harvesting.pdf" className={styles.card}>
        <h2>Impact of Rainwater Harvesting Units On Maasai Regions in Northern Tanzania &rarr;</h2>
        <p>- Published in National High School Journal of Science [Oct 2024]</p>
        <p>- Presidential Volunteer Service Award - Gold Medal [300+ Hours]</p>
        <p>- Presented at MDCON23 [Multi-District East-Africa Convention] Audience of 600+ delegates</p>
        <p>- Melvin Jones Humanitarian Service Award</p>
      </a>
    </div>

    <SpeedInsights/>
    <Analytics/>
  </main>

  <footer className={styles.footer}>
    Yuvraj Taneja &copy; all rights reserved. &nbsp; &nbsp;
    <a href="https://www.github.com/roshantaneja/uv2v.io" target="_blank" rel="noopener noreferrer" style={{alignSelf: 'right'}}>
      Check out the code on GitHub!
    </a>
  </footer>
</div>
  )
}
