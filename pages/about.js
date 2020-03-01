import React from "react";
import "../config/reset.scss";
import "../config/config.scss";
import "./styles.scss";
import Head from 'next/head'
import Header from "../components/header";
import Footer from "../components/footer";

const AboutPage = props => {
  return (
    <main className="small_container">
      <Head>
        <title>About - Gluten Tag</title>
        <meta name="description" content="En apprendre plus sur Mathis DYK, développeur Front-End chez TBWA\Groupe" />
      </Head>
      <Header actual="about" />
      <section className="about">
        <img src="/img/hey_thatsme.jpg" alt="" />
        <p>Salut ! Je m'appelle Mathis DYK.<br />
        Je suis développeur front-end chez <a name="Visiter le site de DAN Paris" href="https://dan.paris/" rel="noopener" className="dan" target="_blank">DAN Paris</a>\<a name="Aller sur le site de TBWA Groupe" href="https://www.tbwa-groupe.com/" rel="noopener" className="tbwa" target="_blank">TBWA Groupe</a>, étudiant en alternance en Master à l'ECV Digital.<br />
        Après un DUT MMI (Métiers du Multimédia et de l'Internet) à Blois, je suis passé à la faculté de Cergy-Pontoise (aîle de Gennevilliers), où j'ai pû faire une licence en Développement Web, en alternance chez <a name="Se rendre sur le site de Wonderstudios" href="https://www.wonderstudios.com/" rel="noopener" className="wonderstudios" target="_blank">Wonderstudios</a>.<br />
        Désormais, je fais de mon mieux pour partager ce que j'ai pû apprendre durant ces années, tout en continuant d'apprendre.</p>
        <p>J'utilise principalement Javascript, vanilla ou avec des frameworks tels que React ou NextJS.</p>
      </section>
      <Footer />
    </main>
  );
};

export default AboutPage;
