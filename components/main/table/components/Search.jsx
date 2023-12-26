import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
const Search = () => {
  return (
    <SearchStyle>
      <div className="search-container">
        <form className="search-form">
          <input type="text" placeholder="Search" className="search-input" />
          <SearchIcon className="search-icon" sx={{ color: "grey" }} />
          <form>
            <input
              type="checkbox"
              id="check"
              name="Show PII only"
              className="search-checkbox"
            />
            <label for="check" className="search-label">
              Show PII only
            </label>
          </form>
        </form>
        <button type="submit">Apply</button>
      </div>
      <div className="search-reset">Reset Filter</div>
    </SearchStyle>
  );
};

const SearchStyle = styled.div`
  display: flex;
  flex-direction: column;
  .search-container {
    display: flex;
  }
  .search-form {
    width: 100%;
    position: relative;
  }
  .search-input {
    width: 100%;
    height: 3em;
    border: none;
    box-shadow: inset 0px 0px 4px 0px rgba(0, 0, 0, 0.5);
    padding-left: 50px;
  }
  .search-input:focus {
    outline: none;
  }
  span {
    position: absolute;
    left: 10px;
    top: 5px;
  }

  .search-checkbox {
    position: absolute;
    right: 130px;
    top: 10px;
  }
  .search-label {
    position: absolute;
    right: 45px;
    top: 11px;
    font-size: 13px;
  }
  button {
    height: 40px;
    width: 135px;
    background-color: #6a1b9a;
    color: white;
    border: none;
    cursor: pointer;
    font-weight: 700;
  }
  .search-reset {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    color: #6a1b9a;
    cursor: pointer;
    font-weight: 400;
    font-size: 13px;
    margin-top: 3px;
  }
  .search-icon {
    position: absolute;
    top: 9px;
    left: 15px;
  }
`;

export default Search;
