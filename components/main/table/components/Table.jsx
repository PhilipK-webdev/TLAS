import React, { useState } from "react";
import TableHead from "./TableHead";
import ArrowDropDownCircleSharpIcon from "@mui/icons-material/ArrowDropDownCircleSharp";
import styled from "styled-components";
const Table = ({ data }) => {
  const [clickIcon, setClickIcon] = useState(false);
  const renderData = (key, value) => {
    let element = null;
    switch (key) {
      case "urlParams":
        element = (
          <TableBody>
            <tr style={{ display: "flex", fontWeight: "normal" }}>
              <th onClick={() => setClickIcon(!clickIcon)}>
                {" "}
                <ArrowDropDownCircleSharpIcon sx={{ color: "lightgray" }} />
              </th>
              <th style={{ display: "flex", alignSelf: "center" }}>
                URL Parameters
              </th>
            </tr>
            {clickIcon && (
              <table style={{ width: "100%" }}>
                {value.map((attribute) => {
                  return (
                    <TableRowData>
                      <th
                        style={{
                          position: "absolute",
                          fontWeight: "normal",
                          color: "darkblue",
                          top: "10px",
                          left: "30px",
                        }}
                      >
                        {attribute.name}
                      </th>
                      <th
                        style={{
                          position: "absolute",
                          fontWeight: "normal",
                          color: "darkblue",
                          left: "33%",
                          top: "10px",
                        }}
                      >
                        <button
                          style={{
                            width: "80px",
                            background: "white",
                            border: "1px solid #34427F",
                            color: "#34427F",
                            fontWeight: "bold",
                          }}
                        >
                          {"PII"}
                        </button>
                      </th>
                      <th
                        style={{
                          position: "absolute",
                          fontWeight: "normal",
                          color: "darkblue",
                          left: "40%",
                          top: "10px",
                        }}
                      >
                        <button>{"MASKED"}</button>{" "}
                      </th>
                      <th
                        style={{
                          position: "absolute",
                          fontWeight: "normal",
                          color: "darkblue",
                          right: "100px",
                          top: "10px",
                        }}
                      >
                        {attribute.type}
                      </th>
                    </TableRowData>
                  );
                })}
              </table>
            )}
          </TableBody>
        );
        break;
      case "queryParams":
        element = (
          <div style={{ display: "flex" }}>
            <div>icon</div>
            <div>Query Parameters</div>
          </div>
        );
        break;
      case "headers":
        element = (
          <div style={{ display: "flex" }}>
            <div>icon</div>
            <div>Headers</div>
          </div>
        );
        break;
      case "body":
        element = (
          <div style={{ display: "flex" }}>
            <div>icon</div>
            <div>Body</div>
          </div>
        );
        break;
      default:
        break;
    }
    return element;
  };
  return (
    <table
      style={{
        width: "100%",
        padding: "20px",
      }}
    >
      <TableHead />
      {Object.entries(data).map(([key, value]) => {
        return renderData(key, value);
      })}
    </table>
  );
};

const TableRowData = styled.tr`
  position: relative;
  height: 50px;
  box-shadow: 0 0px 3px 0px #aaaaaa;
  color: white;
`;

const TableBody = styled.tbody`
  &:before {
    content: "";
    display: block;
    height: 40px;
  }
`;
export default Table;
