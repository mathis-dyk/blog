import React from "react";
import Link from "next/link";
import "./styles.scss";

const Header = props => {
  return (
    <header>
      <h1 className="mainTitle">
        <Link href="/" as="/">
          <a aria-label="Retour à l'accueil" name="Retour à l'accueil">Gluten Tag</a>
        </Link>
      </h1>

      <ul>
        <li>
            {(props.actual == "about") ? <Link href="/"><a aria-label="Retour à l'accueil" name="Retour à l'accueil">Blog</a></Link> : <Link href="/about"><a aria-label="Visiter la page about" name="Visiter la page About">About</a></Link>}
        </li>
      </ul>
    </header>
  );
};

export default Header;
