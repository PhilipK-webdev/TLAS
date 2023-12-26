import React from "react";
import styled from "styled-components";
import Search from "./components/Search";
const Table = ({
  navData,
  handleOnChange,
  inputRef,
  applySearch,
  resetFilter,
}) => {
  console.log("navData", navData);
  return (
    <TableStyle>
      <Search
        handleOnChange={handleOnChange}
        inputRef={inputRef}
        applySearch={applySearch}
        resetFilter={resetFilter}
      />
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
`;
export default Table;
