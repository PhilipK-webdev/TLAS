"use client";
import React from "react";
import styled from "styled-components";
import Nav from "./Nav";
import Table from "./table/Table";
const Main = ({
  handleToggleNav,
  toggleNav,
  navData,
  handleOnChange,
  inputRef,
  applySearch,
  resetFilter,
}) => {
  return (
    <MainContainer>
      <Nav
        handleToggleNav={handleToggleNav}
        toggleNav={toggleNav}
        req={"Request"}
        res={"Response"}
      />
      <Table
        navData={navData}
        handleOnChange={handleOnChange}
        inputRef={inputRef}
        applySearch={applySearch}
        resetFilter={resetFilter}
      />
    </MainContainer>
  );
};

const MainContainer = styled.main`
  height: auto;
  width: 100%;
`;

export default Main;
