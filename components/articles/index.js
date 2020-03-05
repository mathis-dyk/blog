import React from "react";
import TitleArticle from "../titleArticle";

const Articles = ({ articles }) => {
  return (
    <section className="articles">
      {console.log(articles)}
      {articles
        .slice(0)
        .reverse()
        .map(article => (
          <TitleArticle key={article.slug} data={article} />
        ))}
    </section>
  );
};

export default Articles;
