import Head from 'next/head';
import styles from '../styles/About.module.css';

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Me - Yuvraj Taneja</title>
        <meta
          name="description"
          content="Learn more about Yuvraj Taneja, a junior at Sacred Heart Preparatory passionate about technology and humanitarian work."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <a href="/" className={styles.backLink}> &larr; Back to Home</a>
        <h1 className={styles.title}>About Me</h1>
        <section className={styles.section}>
          <p>
            Hi, I'm Yuvraj Taneja! I'm a Regents' Scholar at UC Berkeley EECS with a passion for technology, robotics, and
            humanitarian work. My work focuses on using machine learning and technology to solve real-world challenges.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Education & Achievements</h2>
          <ul className={styles.statsList}>
            <li><strong>School:</strong> University of California, Berkeley (Aug 2026 - present)</li>
            <li><strong>Degree:</strong> B.S. Electrical Engineering & Computer Sciences, Regents' Scholar</li>
            <li><strong>Computer Science:</strong> Data Structures, Digital Computers & Operation</li>
            <li><strong>Electrical Engineering:</strong> Circuit Analysis & Modeling, Signals, Systems, Controls & Machine Learning</li>
            <li><strong>Mathematics:</strong> Linear Algebra & Differential Equations, Discrete Mathematics & Probability Theory</li>
            <li><strong>Previously:</strong> Sacred Heart Preparatory (2022 - 2026), <a href="https://www.maxpreps.com/water-polo/25-26/rankings/1/" target="_blank" rel="noopener noreferrer" style={{color: '#F59E0B'}}>#2 ranked Water Polo team</a></li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Awards & Recognition</h2>
          <ul className={styles.interestsList}>
            <li>Grand Prize & Sharpe Section Winner, Stanford LLM x Law Hackathon 2026</li>
            <li>NeurIPS 2024 Global Award Winner, ML for Social Impact (1 of 4 winners)</li>
            <li>Patents Pending: No. 63/703,232, No. 19/346,990</li>
            <li>Control and Innovate Award, NorCal Robotics 2023, 2024</li>
            <li>4x USA Water Polo Junior Olympian</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Leadership & Activities</h2>
          <ul className={styles.interestsList}>
            <li>Intern, Harvard Spatial Data Lab (Nov 2024 - Aug 2026)</li>
            <li>Youth President, Maji Wells (2022 - present)</li>
            <li>Robotics Captain, Sacred Heart Preparatory (2024 - 2025)</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Technical Skills</h2>
          <p>
            I'm proficient in multiple programming languages and technologies:
          </p>
          <ul className={styles.interestsList}>
            <li>Python, Java, C++, JavaScript, TypeScript, SQL</li>
            <li>PyTorch, TensorFlow, Node.js, Pandas, NumPy, Scikit-learn</li>
            <li>Google Earth Engine, ArcGIS, MongoDB, Google Cloud APIs, Git</li>
            <li>Machine Learning & AI</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Contact Information</h2>
          <ul className={styles.statsList}>
            <li><strong>Location:</strong> Cupertino, CA, United States</li>
            <li><strong>Phone:</strong> +1 (203) 536 4723</li>
            <li><strong>Email:</strong> yuvitaneja [at] berkeley [dot] edu</li>
          </ul>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2026 Yuvraj Taneja. All Rights Reserved.</p>
      </footer>
    </div>
  );
}