import clsx from 'clsx';
import styles from './rating.module.css';
import Container from '../../../Container';
import React from 'react';
import { FaStar } from 'react-icons/fa';

const Rating = ({ stars = 5 }) => {
  const dates = ['2018', '2019', '2020'];
  return (
    <section className={clsx(styles.rating)}>
      <Container
        className={clsx(styles.ratingContent)}
        dataAnimate="fadeInRight"
      >
        <div className={clsx(styles.dates)}>
          {dates.map((item, index) => (
            <h2 key={index} className={clsx(styles.datesTitle)}>
              {item}
            </h2>
          ))}
        </div>
        <div className={clsx(styles.ratingCard)}>
          <div className={clsx(styles.starsAmount)}>
            {Array.from({ length: stars }).map((star, i) => (
              <FaStar color="rgba(209, 169, 84, 1)" size={25} key={i} />
            ))}
          </div>
          <h3 className={clsx(styles.ratingCardTitle)}>
            Лучший театр по мнению театральных критиков Парижа
          </h3>
        </div>
      </Container>
    </section>
  );
};

export default Rating;
