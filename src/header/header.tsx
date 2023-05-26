import "./header.scss";

import React from "react";
import logo from '../logo.svg'
import './header.scss'
interface menuItem {
  title: string;
  link: string;
}
const menuIteas: menuItem[] = [
  {
    title: "Home",
    link: "#",
  },

  {
    title: "Project",
    link: "#",
  },
  {
    title: "Skill",
    link: "#",
  },{
    title: "About Me",
    link: "#",
  },
];
function NavHeader(): React.JSX.Element {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />

      <ul className={"nav-menu"}>
        {menuIteas.map((menuItem) => (
          <li>
            <a href={menuItem.link}>{menuItem.title}</a>
          </li>
        ))}
      </ul>
    </header>
  );
}

export default NavHeader;
