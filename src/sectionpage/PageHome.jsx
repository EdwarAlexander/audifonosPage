import { Header } from "./Header";
import { Icono } from "./Icono";
import { Model } from "./Model";
import { Tech } from "./Tech";
import { Contact } from './Contact';
import { Footer } from "./Footer";

export const PageHome = () => {
  return (
    <>
      <Header />
      <Icono />
      <Tech />
      <Model />
      <Contact />
      <Footer />
    </>
  )
}
