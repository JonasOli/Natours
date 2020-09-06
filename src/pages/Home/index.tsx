import React from "react";
import { About } from "../../components/About";
import { Feature } from "../../components/Features";
import { Header } from "../../components/Header";
import { Story } from "../../components/Story";
import { Tours } from "../../components/Tours";
import "./style.scss";

export const Home = () => {
  return (
    <>
      <Header />
      <About />
      <Feature />
      <Tours />
      <Story />
    </>
  );
};
