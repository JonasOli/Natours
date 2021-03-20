import React from "react";
import { About } from "../../components/About";
import { Booking } from "../../components/Booking";
import { Feature } from "../../components/Features";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Navigation } from "../../components/Navigation";
import { Story } from "../../components/Story";
import { Tours } from "../../components/Tours";
import "./style.scss";

export const Home = () => {
  return (
    <>
      <Navigation />
      <Header />
      <About />
      <Feature />
      <Tours />
      <Story />
      <Booking />
      <Footer />
    </>
  );
};
