"use client";
import styled from "styled-components";
import { Grid } from "@mui/material";
import GlobalStyles from "@/styles/globalStyle";
import { useEffect, useState } from "react";
export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch("/api/data");
      const data = await response.json();
      console.log("data", data);
      // setPosts(data);
    })();
  }, []);
  // console.log(posts);
  return (
    <>
      <GlobalStyles />
      <PageStyled>
        <Grid container justifyContent={"center"}>
          <Grid>hello</Grid>
          <div hidden={false}>hhdfshfhsdfhshhsfdh</div>
        </Grid>
      </PageStyled>
    </>
  );
}

const PageStyled = styled.div`
  color: red;
  display: flex;
  justify-content: center;
`;
