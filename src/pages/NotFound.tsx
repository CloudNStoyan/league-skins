import React from "react";
import { Link } from "react-router-dom";
import NotFoundStyled from "./styles/NotFound.styled";

const NotFound = () => {
  return (
    <NotFoundStyled>
      <h1>
        This page was not found! Please return to{" "}
        <Link to="/">Browsing Champions</Link>
      </h1>
    </NotFoundStyled>
  );
};

export default NotFound;
