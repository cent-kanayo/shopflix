import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  const styles = {
    background: "lightblue",
    fontSize: "1.5rem",
    fontWeight: "Bold",
    padding: "30%",
    width: "0 auto",
  };
  const btn = {
    border: "none",
    borderRadius: "5px",
    margin: "10px",
    padding: "5px 10px",
  };
  return (
    <div style={styles}>
      <h2>Oops! Can't seem to find the page you are looking for </h2>
      <button type="button" style={btn}>
        <Link to="/">Back Home</Link>
      </button>
    </div>
  );
};

export default Error;
