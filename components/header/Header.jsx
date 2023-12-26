import React from "react";
import styled from "styled-components";
export const Header = ({ headerData }) => {
  const path = headerData["path"]?.replace("v1", "V1");
  const method = `${headerData["method"]?.toUpperCase()}`;

  return (
    <header>
      <HeaderBody>
        <HeaderTitle>
          <span style={{ marginRight: "10px" }}>{method}</span> {path}
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
  padding: 30px;
`;

const HeaderTitle = styled.div`
  width: 285px;
  height: 35px;
  color: #5f0096;
  font-weight: bold;
  span {
    font-weight: 400;
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
    border-bottom: 1px solid #ededed;
    width: 90vw;
    margin-top: 10px;
    display: block;
  }

  .entity {
    font-size: 13px;
    color: #5f0096;
  }
  span {
    font-weight: 400;
  }
`;
