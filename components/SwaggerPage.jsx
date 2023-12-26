"use client";
import React, { useState, useEffect, useRef } from "react";
import { Header } from "./header/Header";
import styled from "styled-components";
import Main from "./main/Main";

const SwaggerPage = () => {
  const [data, setData] = useState([]);
  const [headerData, setHeaderData] = useState({});
  const [loading, setLoading] = useState(true);
  const [toggleNav, setToggleNav] = useState(true);
  const [navData, setNavData] = useState(null);
  const [isPII, setIsPII] = useState(false);
  const inputRef = useRef(null);
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
        setNavData(dataResult["request"]);
      }
    })();
  }, []);

  const handleToggleNav = (id) => {
    setNavData(data[id]);
    setToggleNav(id === "request");
  };

  const handleOnChange = (e) => {
    setIsPII(e.target.checked);
  };
  const applySearch = (e) => {
    e.preventDefault();
    const dataTable = { ...navData };
    const getFilteredData = {};
    Object.entries(dataTable).forEach(([key, value]) => {
      if (value.length > 0) {
        getFilteredData[key] = value.filter(
          (val) =>
            (val.name === inputRef.current.value ||
              val.type === inputRef.current.value) &&
            val.pii === isPII
        );
      }
    });
    setNavData(getFilteredData);
  };
  const resetFilter = () => {
    setNavData(data["request"]);
    setToggleNav(true);
  };
  return (
    <PageStyled>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          {headerData && Object.keys(headerData).length > 0 && (
            <Header headerData={headerData} />
          )}
          {data && Object.keys(data).length > 0 ? (
            <Main
              handleToggleNav={handleToggleNav}
              toggleNav={toggleNav}
              navData={navData}
              handleOnChange={handleOnChange}
              inputRef={inputRef}
              applySearch={applySearch}
              resetFilter={resetFilter}
            />
          ) : null}
        </>
      )}
    </PageStyled>
  );
};

const PageStyled = styled.div`
  color: black;
  display: flex;
  flex-direction: column;
`;

export default SwaggerPage;
