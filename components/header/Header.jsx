import React from "react";
import styled from "styled-components";
export const Header = ({ headerData }) => {
  const path = headerData["path"].replace("v1", "V1");
  const method = `${headerData["method"].toUpperCase()}`;

  return (
    <header>
      <HeaderBody>
        <HeaderTitle>
          <span>{method}</span> {path}
        </HeaderTitle>
        <HeaderBreadCrumbs>
          All APIs <span className="entity">&gt;</span> {headerData["api"]}{" "}
          <span className="entity">&gt; </span>
          <span>{path}</span>
        </HeaderBreadCrumbs>
      </HeaderBody>
    </header>
  );
};

const HeaderBody = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 69px;
`;

const HeaderTitle = styled.div`
  width: 285px;
  height: 35px;
  color: #5f0096;
  font-weight: bold;
  span {
    color: #bc89d1;
  }
`;
const HeaderBreadCrumbs = styled.div`
  width: 427px;
  height: 28px;
  color: #5f0096;
  font-weight: bold;
  position: relative;
  &::after {
    content: "";
    border-bottom: 1px solid #f0f0f0;
    width: 1322px;
    margin-top: 10px;
    display: block;
  }

  .entity {
    font-size: 13px;
    color: #5f0096;
  }
  span {
    color: #bc89d1;
  }
`;
