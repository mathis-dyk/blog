import showdown from "showdown";
import "../config/reset.scss";
import "../config/config.scss";
import "./styles.scss";
import "./article.scss";
import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";
import { numberToMonth, numberToSemaine } from "../tools";
import Link from 'next/link'
import { useRouter } from 'next/router';

const Article = props => {
    const router = useRouter();

    if (props.articles && props.articles[0]) {
        let article = props.articles[0]
        var conv = new showdown.Converter();
        var html = conv.makeHtml(article.content);
        let keyWords;
        if (article && article.categories) {
          keyWords = article.categories.map(data => data.name).toString();
        }
        let dateFull = new Date(article.created_at);
      
        return (
          <main className="small_container article">
            <Head>
              <title dangerouslySetInnerHTML={{ __html: article.title }} />
              <meta name="viewport" content="initial-scale=1.0, width=device-width" />
              <meta name="description" content={article.description} />
              <meta name="keywords" content={keyWords} />
            </Head>
            <Header />
            <h1 dangerouslySetInnerHTML={{ __html: article.title }} />
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
              <span className="timeRead"> 📚 {article.timeRead} minutes</span>
            </div>
            <article dangerouslySetInnerHTML={{ __html: html }} />
            <Footer />
          </main>
        );
    } else {
        return (
            <main className="small_container article">
            <Head>
              <title dangerouslySetInnerHTML={{ __html: "dab" }} />
              <meta name="viewport" content="initial-scale=1.0, width=device-width" />
              <meta name="description" content="" />
              <meta name="keywords" content="" />
            </Head>
            <Header actual="blog" />
                <div className="error">
                    <h1>404</h1>
                    <p>Il semblerait que cette page n'existe pas !</p>
                    <Link href="/">
                        <a>Retour à l'accueil</a>
                    </Link>
                </div>
            <Footer />
          </main>
        )
    }
};

Article.getInitialProps = async function(router) {
//   const res = await fetch(`http://localhost:1337/articles?slug=${query.id}`);
  const res = await fetch(`https://backend-blog-mathis.herokuapp.com/articles?slug=${router.query.id}`);
  const json = await res.json();
  return { articles: json };
};

export default Article;
