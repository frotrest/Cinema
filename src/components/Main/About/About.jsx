import clsx from 'clsx';
import styles from './about.module.css';
import Container from '../../../Container';
import React from 'react';
import Theater from '@assets/theater.webp';
import { MdEventSeat } from 'react-icons/md';
import { GiTheaterCurtains } from 'react-icons/gi';

const About = () => {
  return (
    <section className={clsx(styles.about)} id="about">
      <Container className={clsx(styles.aboutContent)} dataAnimate="fadeInUp">
        <h2 className={clsx(styles.aboutContentTitle)}>О театре</h2>
        <div className={clsx(styles.advantages)}>
          <div className={clsx(styles.theaterDescription)}>
            <h3 className={clsx(styles.theaterDescriptionTitle)}>
              Самый лучший театр СПБ
            </h3>
            <p className={clsx(styles.theaterDescriptionItem)}>
              Как свидетельствуют архивные документы, первое каменное здание
              Большого театра начали возводить в 1775 году по проекту Антонио
              Ринальди. В дальнейшем, после того как Ринальди упал с лесов и не
              мог лично наблюдать за ходом работ, Екатерина II поручила
              немецкому театральному декоратору и архитектору Людвигу Филиппу
              Тишбейну создать новый проект театра, который и был воплощён
              архитекторами Ф. В. фон Бауром и М. А. Деденёвым. Открытие его
              состоялось в 1783 году, хотя, основываясь на других
              свидетельствах, годом открытия можно считать 1784 год.
            </p>
          </div>
          <div className={clsx(styles.theaterNumbers)}>
            <h3 className={clsx(styles.theaterNumbersTitle)}>
              Немного о цифрах
            </h3>
            <div className={clsx(styles.theaterNumbersCards)}>
              <div className={clsx(styles.theaterNumber)}>
                <MdEventSeat size={70} color="white" />
                <h5 className={clsx(styles.theaterNumberTitle)}>
                  <span className={clsx(styles.theaterNumberSubTitle)}>
                    1600
                  </span>{' '}
                  посадочный мест
                </h5>
              </div>
              <div className={clsx(styles.theaterNumber)}>
                <GiTheaterCurtains size={70} color="white" />
                <h5 className={clsx(styles.theaterNumberTitle)}>
                  <span className={clsx(styles.theaterNumberSubTitle)}>
                    350
                  </span>{' '}
                  лет истории
                </h5>
              </div>
            </div>
          </div>
          <img
            src={Theater}
            alt="theater"
            className={clsx(styles.theaterImg)}
            loading="lazy"
          />
        </div>
      </Container>
    </section>
  );
};

export default About;
