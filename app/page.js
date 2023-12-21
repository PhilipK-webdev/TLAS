"use client";
import styled from "styled-components";
import { Grid } from "@mui/material";
import GlobalStyles from "@/styles/globalStyle";
import SwaggerPage from "@/components/SwaggerPage";
export default function Home() {
  return (
    <>
      <GlobalStyles />
      <PageStyled>
        <Grid container>
          <SwaggerPage />
        </Grid>
      </PageStyled>
    </>
  );
}

const PageStyled = styled.div`
  color: black;
  display: flex;
  justify-content: center;
  padding: 30px;
`;
