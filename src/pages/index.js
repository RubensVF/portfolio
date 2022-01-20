import * as React from "react";
import { Helmet } from "react-helmet";
import About from "../components/Abaout/About";
import Canvas from "../components/Canvas/Canvas";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import './global.css';
const IndexPage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png"/>
        <title>Ruben Velazquez|Developer</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Hero/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
      <Canvas/>
    </>
  )
}

export default IndexPage
