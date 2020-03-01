import React from "react";
import fetch from "isomorphic-unfetch";
import "../config/reset.scss";
import "../config/config.scss";
import "./styles.scss";
import Header from "../components/header";
import Footer from "../components/footer";
import Articles from "../components/articles";
import PresentationBlock from "../components/presentationBlock";

const Home = props => {
  return (
    <main className="small_container">
      <Header actual="blog" />
      <PresentationBlock />
      <Articles articles={props.articles} />
      <Footer />
    </main>
  );
};

Home.getInitialProps = async ctx => {
  // const res = await fetch("http://localhost:1337/articles");
  const res = await fetch("https://backend-blog-mathis.herokuapp.com/articles");
  const json = await res.json();
  return { articles: json };
};

export default Home;
