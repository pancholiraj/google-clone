import React, { useState } from "react";
import "./Search.css";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

const Search = ({ hideButtons = false }) => {
  const [{}, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const history = useNavigate();
  const search = (e) => {
    e.preventDefault();
    console.log("you hit search", input);
    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });
    history("/search");
  };

  return (
    <form className="search">
      <div className="search_input">
        <SearchIcon className="search_input_icon" />
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <MicIcon />
      </div>
      {!hideButtons ? (
        <div className="search_button">
          <Button type="submit" variant="outlined" onClick={search}>
            Google Search
          </Button>
          <Button onClick={search}>I'm Feeling Lucky</Button>
        </div>
      ) : (
        <div className="search_button">
          <Button
            className="search_buttonsHidden"
            type="submit"
            variant="outlined"
            onClick={search}
          >
            Google Search
          </Button>
          <Button className="search_buttonsHidden" onClick={search}>
            I'm Feeling Lucky
          </Button>
        </div>
      )}
    </form>
  );
};

export default Search;
