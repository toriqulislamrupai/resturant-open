import React, { useRef } from 'react';
import Header from './Components/Header';
import Hero from './Components/Hero';
import About from './Components/About';
import MenuItems from './Components/MenuItems';
import Testimonials from './Components/Testimonials';
import ReservationForm from './Components/ReservationForm';
import Footer from './Components/Footer';

const App = () => {
  // Create refs for each section
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const menuItemsRef = useRef(null);
  const testimonialsRef = useRef(null);
  const reservationRef = useRef(null);
  const footerRef = useRef(null);

  return (
    <div className="App">
      <Header
        heroRef={heroRef}
        aboutRef={aboutRef}
        menuItemsRef={menuItemsRef}
        testimonialsRef={testimonialsRef}
        reservationRef={reservationRef}
        footerRef={footerRef}
      />
      <section ref={heroRef}><Hero /></section>
      <section ref={aboutRef}><About /></section>
      <section ref={menuItemsRef}><MenuItems /></section>
      <section ref={testimonialsRef}><Testimonials /></section>
      <section ref={reservationRef}><ReservationForm /></section>
      <section ref={footerRef}><Footer /></section>
    </div>
  );
};

export default App;
