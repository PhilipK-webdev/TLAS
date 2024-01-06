import React from "react";
import styled from "styled-components";
import Search from "./components/Search";
import Table from "./components/Table";
const DataTable = ({
  navData,
  handleOnChange,
  inputRef,
  applySearch,
  resetFilter,
}) => {
  return (
    <TableStyle>
      <Search
        handleOnChange={handleOnChange}
        inputRef={inputRef}
        applySearch={applySearch}
        resetFilter={resetFilter}
      />
      <TableContainer>
        <Table data={navData} />
      </TableContainer>
    </TableStyle>
  );
};

const TableStyle = styled.div`
  background-color: #f0f0f0;
  height: 500px;
  width: 100%;
  margin-top: 10px;
  box-shadow: inset 0px 0px 4px 0px rgba(0, 0, 0, 0.5);
  padding: 50px;
  position: relative;
`;
const TableContainer = styled.div`
  background-color: #ffffff;
  width: 100%;
  heigth: auto;
  margin-top: 15px;
  &::after {
    content: "";
    border-bottom: 2px solid #d9d9d9;
    width: 94.3%;
    position: absolute;
    top: 163px;
  }
`;

export default DataTable;
