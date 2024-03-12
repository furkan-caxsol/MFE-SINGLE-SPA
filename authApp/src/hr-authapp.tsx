import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import Root from "./root.component";
import { Container } from "@mui/material";

const FallbackUI = () => {
  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        height: "70vh",
        width: "70vw",
        border: "1px solid black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      Something went wrong while loading login page. Fallback UI displayed.
    </Container>
  );
};

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
  errorBoundary(err, info, props) {

    return <FallbackUI />;
  },
});

export const { bootstrap, mount, unmount } = lifecycles;
