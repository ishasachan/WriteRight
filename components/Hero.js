import styles from './Hero.module.css';

export default function Hero() {

  const handleGetStartedClick = () => {
    document.getElementById('generate-cover').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.title}>WriteRight</h1>
        <p className={styles.subtitle}>The smart way to write cover letters</p>
        <button onClick={handleGetStartedClick} className={styles.button}>Get started</button>
      </div>
    </section>
  );
}
