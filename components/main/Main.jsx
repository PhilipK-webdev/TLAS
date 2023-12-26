"use client";
import React from "react";
import styled from "styled-components";
import Nav from "./Nav";
import Table from "./table/Table";
const Main = ({ handleToggleNav, toggleNav, data }) => {
  return (
    <MainContainer>
      <Nav
        handleToggleNav={handleToggleNav}
        toggleNav={toggleNav}
        req={"Request"}
        res={"Response"}
      />
      <Table data={data} />
    </MainContainer>
  );
};

const MainContainer = styled.main`
  height: auto;
  width: 100%;
`;

export default Main;
