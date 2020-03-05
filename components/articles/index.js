import React from "react";
import TitleArticle from "../titleArticle";

const Articles = ({ articles }) => {
  return (
    <section className="articles">
      {articles && Array.prototype.slice.call(articles)
        .reverse()
        .map(article => (
          <TitleArticle key={article.slug} data={article} />
        ))}
    </section>
  );
};

export default Articles;
