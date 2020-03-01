import React from "react";
import Link from "next/link";
import "./styles.scss";

const Header = props => {
  return (
    <header>
      <h1 className="mainTitle">
        <Link href="/">
          <a>Gluten Tag</a>
        </Link>
      </h1>

      <ul>
        <li>
            {(props.actual == "about") ? <Link href="/"><a>Blog</a></Link> : <Link href="/about"><a>About</a></Link>}
        </li>
      </ul>
    </header>
  );
};

export default Header;
