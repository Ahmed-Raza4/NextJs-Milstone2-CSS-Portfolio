'use client'
import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Header from "./components/header";
import Main from "./components/main";
import Portfolio from "./components/portfolio";

export default function Home() {
  return (
  <>
    <Header/>
    <Main/>
    <About/>
    <Portfolio/>
    <Contact/>
    <Footer/>
  </>
  );
}
