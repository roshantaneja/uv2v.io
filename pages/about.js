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
            Hi, I'm Yuvraj Taneja! I'm a junior at Sacred Heart Preparatory with a passion for technology, robotics, and
            humanitarian work. My work focuses on using machine learning and technology to solve real-world challenges,
            particularly in water accessibility and robotics.
          </p>
          <p>
            As Youth President of Maji Wells, I lead initiatives to improve water accessibility in Tanzania, while also
            serving as a Robotics Leadership team member and Water Polo team captain at my school.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Education & Achievements</h2>
          <ul className={styles.statsList}>
            <li><strong>School:</strong> Sacred Heart Preparatory</li>
            <li><strong>GPA:</strong> 4.14</li>
            <li><strong>AP Courses:</strong> Computer Science A [5], Spanish Language [4], Physics 1, Calculus BC, Microeconomics, Macroeconomics, English Language and Composition</li>
            <li><strong>Post-AP:</strong> Advanced Topics in Computer Science, Machine Learning</li>
            <li><strong>Summer Programs:</strong> Behavioral Economics @ John Hopkins University, Python for Economics @ UCLA, Remote Sensing @ MIT Beaverworks, Harvard GIS Institute</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Awards & Recognition</h2>
          <ul className={styles.interestsList}>
            <li>President's Volunteer Service Award Gold Medal 2024</li>
            <li>Melvin Jones International Humanitarian Services Award 2024</li>
            <li>Water Polo Academic All-American 2022, 2023, 2024</li>
            <li>Menlo Rotary Excellence in Computer Science Award 2024</li>
            <li>Control and Innovate Award, NorCal Robotics 2023, 2024</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Leadership & Activities</h2>
          <ul className={styles.interestsList}>
            <li>Youth President, Maji Wells (2021-present)</li>
            <li>Robotics Leadership, Sacred Heart Preparatory (2024)</li>
            <li>Team Captain Junior Varsity, Sacred Heart Preparatory (2024)</li>
            <li>Team Lead, Robotics Club (2022-present)</li>
            <li>Dual Sport Athlete: Varsity Swim, Water Polo</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Technical Skills</h2>
          <p>
            I'm proficient in multiple programming languages and technologies:
          </p>
          <ul className={styles.interestsList}>
            <li>C, C++, Python, JavaScript, Java</li>
            <li>HTML, CSS</li>
            <li>Machine Learning & AI</li>
            <li>Robotics & Automation</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Contact Information</h2>
          <ul className={styles.statsList}>
            <li><strong>Location:</strong> Cupertino, CA, United States</li>
            <li><strong>Phone:</strong> +1 (203) 536 4723</li>
            <li><strong>Email:</strong> yuvrostan [at] gmail [dot] com</li>
          </ul>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2024 Yuvraj Taneja. All Rights Reserved.</p>
      </footer>
    </div>
  );
}