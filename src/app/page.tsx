'use client'
import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Header from "./components/header";
import Main from "./components/main";
import Portfolio from "./components/portfolio";
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import AOS from 'aos';

export default function Home({pageProps}: any) {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
    });
  }, []);
  return (
  <>
    <Header/>
    <Main {...pageProps}/>
    <About {...pageProps}/>
    <Portfolio {...pageProps}/>
    <Contact {...pageProps}/>
    <Footer {...pageProps}/>
  </>
  );
}
