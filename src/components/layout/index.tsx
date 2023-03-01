import React from "react";
import "./styles.css";

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="layout">
      <div className="side-bar">
        <div></div>
        <div className="links-container">
          <button className="links-container-button">Todos</button>
          <button className="links-container-button">Compara</button>
          <button className="links-container-button">Mi equipo</button>
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
