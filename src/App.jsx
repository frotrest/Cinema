import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Header/Hero/Hero';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import { useAnimateOnScroll } from './AnimateWatcher';

function App() {
  useAnimateOnScroll();
  return (
    <>
      <Header>
        <Hero />
      </Header>
      <Main />
      <Footer />
    </>
  );
}

export default App;
