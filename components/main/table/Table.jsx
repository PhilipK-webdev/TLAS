import React from "react";
import styled from "styled-components";
import Search from "./components/Search";
const Table = ({ data }) => {
  return (
    <TableStyle>
      <Search />
    </TableStyle>
  );
};

const TableStyle = styled.table`
  background-color: #f0f0f0;
  height: 500px;
  width: 100%;
  margin-top: 10px;
  box-shadow: inset 0px 0px 4px 0px rgba(0, 0, 0, 0.5);
  padding: 50px;
`;
export default Table;
