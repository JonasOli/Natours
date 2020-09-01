import React from "react";
import { About } from "../../components/About";
import { Feature } from "../../components/Features";
import { Header } from "../../components/Header";

export const Home = () => {
  return (
    <>
      <Header />
      <About />
      <Feature />
    </>
  );
};
