import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>
  {/* {links.map((link) => <a href={link} key={link}>{link}</a>)} */}
  <a href="#home">home</a>
  <a href="#about">about</a>
  <a href="#projects">projects</a>
</nav>;
}

export default NavBar;
