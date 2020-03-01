import React from "react";
import fetch from "isomorphic-unfetch";
import "../config/reset.scss";
import "../config/config.scss";
import "./styles.scss";
import Header from "../components/header";
import Footer from "../components/footer";

const Home = props => {
  return (
    <main className="small_container">
      <Header actual="about" />
      <section className="about">
        <img src="/img/hey_thatsme.jpg" />
        <p>Salut ! Je m'appelle Mathis DYK.<br />
        Je suis développeur front-end chez <a href="https://dan.paris/" class="dan" target="_blank">DAN Paris</a>\<a href="https://www.tbwa-groupe.com/" class="tbwa" target="_blank">TBWA Groupe</a>, étudiant en alternance en Master à l'ECV Digital.<br />
        Après un DUT MMI (Métiers du Multimédia et de l'Internet) à Blois, je suis passé à la faculté de Cergy-Pontoise (aîle de Gennevilliers), où j'ai pû faire une licence en Développement Web, en alternance chez <a href="https://www.wonderstudios.com/" class="wonderstudios" target="_blank">Wonderstudios</a>.<br />
        Désormais, je fais de mon mieux pour partager ce que j'ai pû apprendre durant ces années, tout en continuant d'apprendre.</p>
        <p>J'utilise principalement Javascript, vanilla ou avec des frameworks tels que React ou NextJS.</p>
      </section>
      <Footer />
    </main>
  );
};

Home.getInitialProps = async ctx => {
  const res = await fetch("http://localhost:1337/articles");
  const json = await res.json();
  return { articles: json };
};

export default Home;
