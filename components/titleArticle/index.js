import React from "react";
import Link from "next/link";
import { numberToMonth, numberToSemaine } from "../../tools";
import "./styles.scss";

const TitleArticle = ({
  data: { title, description, created_at, timeRead, slug }
}) => {
  let dateFull = new Date(created_at);
  return (
    <section className="titleArticle">
      <h3>
        <Link href={`/[id]`} as={`/${slug}`}>
          <a name="Lire l'article" aria-label="Lire l'article" dangerouslySetInnerHTML={{ __html: title }} />
        </Link>
      </h3>
      <div className="infos">
        <span className="date">
          {numberToSemaine(dateFull.getDay()) +
            " " +
            dateFull.getDate() +
            " " +
            numberToMonth(dateFull.getMonth()) +
            " " +
            dateFull.getFullYear()}
        </span>
        <span className="timeRead">📚 {timeRead} minutes</span>
      </div>
      <p className="description">{description}</p>
    </section>
  );
};

export default TitleArticle;
