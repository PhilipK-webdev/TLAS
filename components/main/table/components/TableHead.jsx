import React from "react";
import styled from "styled-components";
const TableHead = () => {
  return (
    <THead>
      <TRow>
        <Th style={{ left: "30px" }}>Name</Th>
        <Th style={{ left: "33%" }}>PII</Th>
        <Th style={{ left: "40%" }}>Masking</Th>
        <Th style={{ right: "100px" }}>Type</Th>
      </TRow>
    </THead>
  );
};

const THead = styled.thead`
  color: #b65fc5;
`;
const TRow = styled.tr`
  position: relative;
`;
const Th = styled.th`
  position: absolute;
  top: -10px;
`;
export default TableHead;
