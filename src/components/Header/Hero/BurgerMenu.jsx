import React from 'react';
import styles from '../header.module.css';
import { FaInstagram, FaFacebookF, FaVk, FaYoutube } from 'react-icons/fa';
import { SiDaf } from 'react-icons/si';
import clsx from 'clsx';
import { IoMdClose } from 'react-icons/io';

const BurgerMenu = ({ toggleMenu, isOpen }) => {
  return (
    <div className={clsx(styles.mobileMenu, isOpen && styles.active)}>
      <div className={clsx(styles.closeBtn)} onClick={toggleMenu}>
        <IoMdClose className={clsx(styles.burgerOpen)} size={40} />
      </div>

      <nav className={clsx(styles.mobileNav)}>
        <a
          href="#hero"
          className={clsx(styles.navBarItem)}
          onClick={toggleMenu}
        >
          Главная
        </a>
        <a
          href="#about"
          className={clsx(styles.navBarItem)}
          onClick={toggleMenu}
        >
          О театре
        </a>
        <a
          href="#productions"
          className={clsx(styles.navBarItem)}
          onClick={toggleMenu}
        >
          Наши постановки
        </a>
        <a
          href="#partners"
          className={clsx(styles.navBarItem)}
          onClick={toggleMenu}
        >
          Партнеры театра
        </a>
        <a
          href="#contacts"
          className={clsx(styles.navBarItem)}
          onClick={toggleMenu}
        >
          Контакты
        </a>
      </nav>

      <div className={clsx(styles.mobileSocials)}>
        <FaFacebookF size={40} className={clsx(styles.networkImg)} />
        <FaInstagram size={40} className={clsx(styles.networkImg)} />
        <FaYoutube size={40} className={clsx(styles.networkImg)} />
        <FaVk size={40} className={clsx(styles.networkImg)} />
      </div>
    </div>
  );
};

export default BurgerMenu;
