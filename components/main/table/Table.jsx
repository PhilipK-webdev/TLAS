import React from "react";
import styled from "styled-components";
const Table = () => {
  return (
    <TableStyle>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex" }}>
          <form style={{ width: "100%", position: "relative" }}>
            <input
              type="text"
              placeholder="Search"
              style={{
                width: "100%",
                height: "3em",
                border: "none",
                boxShadow: "inset 0px 0px 4px 0px rgba(0, 0, 0, 0.5)",
                paddingLeft: "50px",
              }}
            />
            <span style={{ position: "absolute", left: "10px", top: "5px" }}>
              &#128269;
            </span>
            <form>
              <input
                type="checkbox"
                id="check"
                name="Show PII only"
                style={{ position: "absolute", right: "130px", top: "10px" }}
              />
              <label
                for="check"
                style={{
                  position: "absolute",
                  right: "45px",
                  top: "11px",
                  fontSize: "13px",
                }}
              >
                Show PII only
              </label>
            </form>
          </form>
          <button
            type="submit"
            style={{
              height: "40px",
              width: "135px",
              backgroundColor: "#6a1b9a",
              color: "white",
              border: "none",
              cursor: "pointer",
              fontWeight: "700",
            }}
          >
            Apply
          </button>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
            color: "#6a1b9a",
            cursor: "pointer",
            fontWeight: "400",
            fontSize: "13px",
            marginTop: "3px",
          }}
        >
          Reset Filter
        </div>
      </div>
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
