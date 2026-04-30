import clsx from 'clsx';
import styles from './partners.module.css';
import Container from '../../../Container';
import React from 'react';
import GasProm from '@assets/gasprom.webp';
import { IoMdSearch } from 'react-icons/io';

const Partners = ({ partners = 8, partnersTable = 6, partnersMobile = 4 }) => {
  return (
    <section className={clsx(styles.partners)} id="partners">
      <Container
        className={clsx(styles.partnersContent)}
        dataAnimate="fadeInLeft"
      >
        <h2 className={clsx(styles.partnersContentTitle)}>
          <span className={clsx(styles.partnersContentSubTitle)}>Партнеры</span>{' '}
          театра
        </h2>
        <div className={clsx(styles.partnersCards)}>
          {Array.from({ length: partners }).map((partner, i) => (
            <img
              src={GasProm}
              alt={`partner-${i}`}
              className={clsx(styles.partner)}
              key={i}
              loading="lazy"
            />
          ))}
        </div>
        <div className={clsx(styles.partnersCardsTable)}>
          {Array.from({ length: partnersTable }).map((partner, i) => (
            <img
              src={GasProm}
              alt={`partner-${i}`}
              className={clsx(styles.partner)}
              key={i}
            />
          ))}
        </div>
        <div className={clsx(styles.partnersCardsMobile)}>
          {Array.from({ length: partnersMobile }).map((partner, i) => (
            <img
              src={GasProm}
              alt={`partner-${i}`}
              className={clsx(styles.partner)}
              key={i}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Partners;
