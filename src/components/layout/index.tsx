import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="layout">
      <div className="side-bar">
        <div></div>
        <div className="links-container">
          <Link to={"/"}>
            <b className="links-container-button">Todos</b>
          </Link>
          <Link to={"/comparison"}>
            <b className="links-container-button">Compara</b>
          </Link>
          <Link to={"/myTeam"}>
            <b className="links-container-button">Mi equipo</b>
          </Link>
        </div>
        <div></div>
      </div>
      <div className="content-wrapper">
        <div className="top-bar">Bienvenido Sergio</div>
        <div className="content-container">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
