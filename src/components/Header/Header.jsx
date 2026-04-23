import clsx from 'clsx';
import styles from './header.module.css';
import Container from '../../Container';
import { FaInstagram, FaFacebookF, FaVk, FaYoutube } from 'react-icons/fa';
import React, { useState } from 'react';
import { RiMenu2Line } from 'react-icons/ri';
import BurgerMenu from './Hero/BurgerMenu';

const Header = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <header className={clsx(styles.header)}>
      <aside className={clsx(styles.asideBar)}>
        <div className={clsx(styles.asideContent)} data-animate="fadeInLeft">
          <h2 className={clsx(styles.asideContentTitle)}>
            Контактная информация
          </h2>
          <div className={clsx(styles.networks)}>
            <div className={clsx(styles.network)}>
              <FaInstagram size={25} className={clsx(styles.networkImg)} />
            </div>
            <div className={clsx(styles.network)}>
              <FaFacebookF size={25} className={clsx(styles.networkImg)} />
            </div>
            <div className={clsx(styles.network)}>
              <FaVk size={25} className={clsx(styles.networkImg)} />
            </div>
            <div className={clsx(styles.network)}>
              <FaYoutube size={25} className={clsx(styles.networkImg)} />
            </div>
          </div>
        </div>
      </aside>
      <BurgerMenu toggleMenu={toggleMenu} isOpen={isOpen} />
      <Container className={clsx(styles.headerContent)} dataAnimate="fadeIn">
        <RiMenu2Line
          onClick={toggleMenu}
          size={40}
          className={clsx(styles.burgerOpen)}
        />
        <nav className={clsx(styles.navBar)}>
          <a href="#hero" className={clsx(styles.navBarItem)}>
            Главная
          </a>
          <a href="#about" className={clsx(styles.navBarItem)}>
            О театре
          </a>
          <a href="#productions" className={clsx(styles.navBarItem)}>
            Наши постановки
          </a>
          <a href="#partners" className={clsx(styles.navBarItem)}>
            Партнеры театра
          </a>
          <a href="#contacts" className={clsx(styles.navBarItem)}>
            Контакты
          </a>
        </nav>
        <a
          href="tel:+74951234567"
          className={clsx(styles.headerContentContact)}
        >
          +7 495 123-45-67
        </a>
      </Container>
      {children}
    </header>
  );
};

export default Header;
