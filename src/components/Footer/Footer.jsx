import clsx from 'clsx';
import styles from './footer.module.css';
import Container from '../../Container';
import React from 'react';

const Footer = () => {
  return (
    <footer className={clsx(styles.footer)}>
      <Container className={clsx(styles.footerContent)} dataAnimate="fadeIn">
        <h2 className={clsx(styles.footerContentItem)}>
          (с) Все права защищены. Большой театр. 2020
        </h2>
        <span className={clsx(styles.footerContentItem)}>
          Разработано by Frotrest
        </span>
      </Container>
    </footer>
  );
};

export default Footer;
