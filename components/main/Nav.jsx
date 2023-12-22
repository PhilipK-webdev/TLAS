import React from "react";
import styled from "styled-components";
const Nav = ({ handleToggleNav, toggleNav, req, res }) => {
  return (
    <NavBar>
      <div
        style={{ paddingRight: "50px" }}
        className={toggleNav ? "requestOn" : "requestOff"}
        onClick={() => handleToggleNav("request")}
      >
        {req}
      </div>
      <div
        className={!toggleNav ? "responseOn" : "responseOff"}
        onClick={() => handleToggleNav("response")}
      >
        {res}
      </div>
    </NavBar>
  );
};

const NavBar = styled.nav`
  width: 100%;
  padding-left: 30px;
  display: flex;

  .requestOn,
  .responseOn {
    font-weight: bold;
    color: #4a148c;
    position: relative;
    cursor: pointer;
  }
  .requestOff,
  .responseOff {
    font-weight: bold;
    color: #656567;
    position: relative;
    cursor: pointer;
  }
  .requestOn::after {
    content: "";
    border-bottom: 3px solid #4a148c;
    width: 80%;
    margin-top: 10px;
    position: absolute;
    top: 21px;
    right: 40px;
  }
  .responseOn::after {
    content: "";
    border-bottom: 3px solid #4a148c;
    width: 120%;
    margin-top: 10px;
    position: absolute;
    top: 21px;
    right: -5px;
  }
`;
export default Nav;
