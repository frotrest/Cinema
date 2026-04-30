import clsx from 'clsx';
import styles from '../header.module.css';
import Container from '../../../Container';
import React from 'react';
import Poster from '@assets/poster.webp';

const Hero = () => {
  return (
    <section className={clsx(styles.hero)} id="hero">
      <Container className={clsx(styles.heroContent)} dataAnimate="fadeIn">
        <div className={clsx(styles.heroDescription)}>
          <h1 className={clsx(styles.heroDescriptionTitle)}>Большой театр</h1>
          <p className={clsx(styles.heroDescriptionItem)}>
            Большо́й теа́тр — петербургский театр, существовавший в 1784—1886
            годах, с 1886 года — Петербургская консерватория. Первое постоянное
            в Санкт-Петербурге, крупнейшее в России и одно из крупнейших
            театральных зданий в Европе XVIII.
          </p>
          <button className={clsx(styles.heroDescriptionBtn)}>Афиша</button>
        </div>
        <img
          src={Poster}
          alt="poster"
          className={clsx(styles.poster)}
          fetchPriority="high"
        />
      </Container>
    </section>
  );
};

export default Hero;
