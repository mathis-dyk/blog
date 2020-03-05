import React from "react";
import "../config/reset.scss";
import "../config/config.scss";
import CONFIG from '../config/config'
import "./styles.scss";
import Header from "../components/header";
import Footer from "../components/footer";
import Articles from "../components/articles";
import Head from 'next/head'
import PresentationBlock from "../components/presentationBlock";
import fetch from "isomorphic-unfetch";

const Home = props => {
  return (
    <>
      <Head>
        <title>Gluten Tag - Blog personnel de Mathis DYK</title>
        <meta name="description" content="Blog de Mathis DYK, destiné à parler de développement Web, de mon apprentissage, et de tout ce qui me passe par la tête" />
      </Head>
      <main className="small_container">
        <Header actual="blog" />
        <PresentationBlock />
        <Articles articles={props.articles} />
        <Footer />
      </main>
    </>
  );
};

Home.getInitialProps = async ctx => {
  const res = await fetch(CONFIG.API_URL + "/articles");
  const json = await res.json();
  return { articles: json };
};

export default Home;
