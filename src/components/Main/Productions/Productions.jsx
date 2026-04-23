import clsx from 'clsx';
import styles from './productions.module.css';
import Container from '../../../Container';
import React from 'react';
import Oskar from '@assets/oskar.png';
import GoldGraphon from '@assets/gold-graphon.png';
import NutCracker from '@assets/nutcracker.png';
import { IoMdSearch } from 'react-icons/io';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';

const Productions = () => {
  const productions = [
    {
      productionTitle: 'Оскар 2020',
      productionData: 'Сентябрь 2020',
      productionImg: Oskar,
    },
    {
      productionTitle: 'Золотой грамофон',
      productionData: 'Июль 2020',
      productionImg: GoldGraphon,
    },
    {
      productionTitle: 'Щелкунчик',
      productionData: 'Май 2020',
      productionImg: NutCracker,
    },
  ];
  return (
    <section className={clsx(styles.productions)} id="productions">
      <Container
        className={clsx(styles.productionsContent)}
        dataAnimate="fadeInLeft"
      >
        <h2 className={clsx(styles.aboutContentTitle)}>
          <span className={clsx(styles.aboutContentSubTitle)}>Наши</span>{' '}
          постановки
        </h2>
        <Swiper
          effect="coverflow"
          spaceBetween={0}
          slidesPerView={'auto'}
          centeredSlides={true}
          modules={[Navigation, Autoplay, EffectCoverflow]}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          className={clsx(styles.productionsSwiper)}
          breakpoints={{
            992: {
              slidesPerView: 1,
              centeredSlides: false,
              spaceBetween: 100,
            },
          }}
        >
          {productions.map((item, index) => (
            <SwiperSlide key={index}>
              <div className={clsx(styles.productionCard)}>
                <img src={item.productionImg} alt={`productionImg-${index}`} />
                <div className={clsx(styles.productionCardText)}>
                  <h2 className={clsx(styles.productionCardTextTitle)}>
                    {item.productionTitle}
                  </h2>
                  <p className={clsx(styles.productionCardTextData)}>
                    {item.productionData}
                  </p>
                </div>
                <a href="#" className={clsx(styles.searchBtn)}>
                  <IoMdSearch color="white" size={30} />
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default Productions;
