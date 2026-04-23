import clsx from 'clsx';
import styles from './maecenas.module.css';
import Container from '../../../Container';
import React, { useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Maecenas = () => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [review, setReview] = useState('');

  const [open, setOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpen(true);
    setName('');
    setCompany('');
    setNumber('');
    setEmail('');
    setReview('');
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') return;
    setOpen(false);
  };

  return (
    <section className={clsx(styles.maecenas)}>
      <Container
        className={clsx(styles.maecenasContent)}
        dataAnimate="fadeInUp"
      >
        <h2 className={clsx(styles.maecenasContentTitle)}>
          <span className={clsx(styles.maecenasContentSubTitle)}>Стать</span>{' '}
          Меценатом
        </h2>
        <div className={clsx(styles.maecenasCards)}>
          <div className={clsx(styles.contacts)} id="contacts">
            <div className={clsx(styles.contactsDepartment)}>
              <a href="tel:+78121233455" className={clsx(styles.contactsItem)}>
                +7 (812) 123-45-55
              </a>
              <a href="tel:+78121234566" className={clsx(styles.contactsItem)}>
                +7 (812) 123-45-66
              </a>
            </div>
            <div className={clsx(styles.contactsDepartment)}>
              <a
                href="mailto:info@theater.ru"
                className={clsx(styles.contactsItem)}
              >
                info@theater.ru
              </a>
              <a
                href="https://share.google/wHevIepxsTeDH6JT7"
                target="blank"
                className={clsx(styles.contactsItem)}
              >
                г. санкт-петербург, невский 140
              </a>
            </div>
          </div>
          <form
            className={clsx(styles.becomeMaecenate)}
            onSubmit={handleSubmit}
          >
            <div className={clsx(styles.maecenasForms)}>
              <div className={clsx(styles.maecenasFormsCol)}>
                <label className={clsx(styles.maecenasFormLabel)}>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={clsx(styles.maecenasFormLabelInput)}
                    type="text"
                    placeholder="Имя"
                    required
                  />
                </label>
                <label className={clsx(styles.maecenasFormLabel)}>
                  <input
                    value={number}
                    onChange={(e) => {
                      const onlyDigits = e.target.value.replace(/\D/g, '');
                      setNumber(onlyDigits);
                    }}
                    className={clsx(styles.maecenasFormLabelInput)}
                    type="tel"
                    placeholder="Телефон"
                    required
                  />
                </label>
              </div>
              <div className={clsx(styles.maecenasFormsCol)}>
                <label className={clsx(styles.maecenasFormLabel)}>
                  <input
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className={clsx(styles.maecenasFormLabelInput)}
                    type="text"
                    placeholder="Компания"
                    required
                  />
                </label>
                <label className={clsx(styles.maecenasFormLabel)}>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={clsx(styles.maecenasFormLabelInput)}
                    type="email"
                    placeholder="E-mail"
                    required
                  />
                </label>
              </div>
              <textarea
                className={clsx(styles.formSendReview)}
                placeholder="Сообщение"
                value={review}
                onChange={(e) => setReview(e.target.value)}
              ></textarea>
            </div>
            <div className={clsx(styles.maecenasSend)}>
              <h2 className={clsx(styles.maecenasFormTitle)}>
                * Ваши данные не будут переданы третьим лицам, 100% вероятность.
                Конфиденциальность мы гарантируем, и защищаем персональные
                данные согласно законку ФЗ-52.
              </h2>
              <button className={clsx(styles.maecenasFormBtn)} type="submit">
                Отправить
              </button>
            </div>
          </form>
        </div>
      </Container>
      <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
        <MuiAlert
          onClose={handleClose}
          severity="success"
          sx={{ width: '100%' }}
        >
          Спасибо! Мы свяжемся с вами позже.
        </MuiAlert>
      </Snackbar>
    </section>
  );
};

export default Maecenas;
