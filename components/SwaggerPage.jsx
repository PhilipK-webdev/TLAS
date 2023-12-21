"use client";
import React, { useState, useEffect } from "react";
import { Header } from "./header/Header";
import styled from "styled-components";

const SwaggerPage = () => {
  const [data, setData] = useState([]);
  const [headerData, setHeaderData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const response = await fetch("/api/data");
      const dataResult = await response.json();
      if (dataResult && Object.keys(dataResult).length > 0) {
        const headerObject = {};
        headerObject["method"] = dataResult?.method
          ? dataResult.method
          : "api.news.com";
        headerObject["path"] = dataResult?.path
          ? dataResult.path
          : "/v1/news/{category}";
        headerObject["api"] = dataResult?.api ? dataResult.api : "";
        setData(dataResult);
        setHeaderData({ ...headerObject });
        setLoading(false);
      }
    })();
  }, [loading]);
  return (
    <PageStyled>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <Header headerData={headerData} />
          <main>Table</main>
        </>
      )}
    </PageStyled>
  );
};

const PageStyled = styled.div`
  color: black;
  display: flex;
  flex-direction: column;
  padding: 30px;
`;

export default SwaggerPage;
