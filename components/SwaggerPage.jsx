"use client";
import React, { useState, useEffect } from "react";
import { Header } from "./header/Header";

const SwaggerPage = () => {
  const [data, setData] = useState([]);
  const [headerData, setHeaderData] = useState({});

  useEffect(() => {
    (async () => {
      const response = await fetch("/api/data");
      const dataResult = await response.json();
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
    })();
  }, []);
  return (
    <div>
      <Header headerData={headerData} />
      <main>Table</main>
    </div>
  );
};

export default SwaggerPage;
