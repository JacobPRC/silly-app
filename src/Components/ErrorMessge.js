import React from "react";

const ErrorMessage = (props) => {
  return (
    <div
      style={{
        backgroundColor: "grey",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div class="ui error message">
        <div class="header">We ran into a problem</div>
        <ul class="list">
          <li>{props.error}</li>
        </ul>
      </div>
    </div>
  );
};

ErrorMessage.defaultProps = {
  error: "App failed to load user data",
};
export { ErrorMessage };
