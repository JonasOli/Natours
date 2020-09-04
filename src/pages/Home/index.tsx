import React from "react";
import { About } from "../../components/About";
import { Feature } from "../../components/Features";
import { Header } from "../../components/Header";
import { Tours } from "../../components/Tours";

export const Home = () => {
  return (
    <>
      <Header />
      <About />
      <Feature />
      <Tours />
    </>
  );
};
