import "./styles.scss";

import ifamlogo from "../assets/logo-ifam.png";

import { Outlet } from "react-router-dom";
export const Container = () => {
  return (
    <>
      <img src={ifamlogo} className="logo" style={{ width: "200px" }} />
      <div className="main-container d-flex align-items-center">
        <Outlet />
      </div>
    </>
  );
};
