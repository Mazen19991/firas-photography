import React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import {  Link } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
  },
  typography: {
    allVariants: {
      textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      textTransform: "capitalize",
      fontFamily: "Sarabun",
      fontSize: "1.21431rem",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "normal",
    },
  },
});

function Nav(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  if (
    event.defaultPrevented ||
    event.button !== 0 || // ignore everything but left-click
    event.metaKey ||
    event.ctrlKey ||
    event.altKey ||
    event.shiftKey
  ) {
    return false;
  }
  return true;
}

export default function NavTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    if (
      event.type !== "click" ||
      (event.type === "click" &&
        Nav(event as React.MouseEvent<HTMLAnchorElement, MouseEvent>))
    ) {
      setValue(newValue);
    }
  };

  return (
      <ThemeProvider theme={theme}>
        <Box sx={{ marginRight: "11.5%" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="nav tabs example"
            sx={{
              minWidth: "unset",
              minHeight: "unset",
              maxWidth: "unset",
              maxHeight: "unset",
              "& .MuiTabs-active": {},
            }}
          >
            <Tab
              component={Link}
              to={"/Home"}
              label={"home"}
              sx={{
                minWidth: "unset",
                minHeight: "unset",
                maxWidth: "unset",
                maxHeight: "unset",
                "&.MuiTab-root": {
                  padding: "0.5rem",
                },
              }}
            ></Tab>
            <Tab
              component={Link}
              to={"/AboutMe"}
              label={"About me"}
              sx={{
                minWidth: "unset",
                minHeight: "unset",
                maxWidth: "unset",
                maxHeight: "unset",
                "&.MuiTab-root": {
                  padding: "0.5rem",
                },
              }}
            ></Tab>
            <Tab
              component={Link}
              to={"/Portfolio"}
              label={"Portfolio"}
              sx={{
                minWidth: "unset",
                minHeight: "unset",
                maxWidth: "unset",
                maxHeight: "unset",
                "&.MuiTab-root": {
                  padding: "0.5rem",
                },
              }}
            ></Tab>
            <Tab
              component={Link}
              to={"/Blog"}
              label={"Blog"}
              sx={{
                minWidth: "unset",
                minHeight: "unset",
                maxWidth: "unset",
                maxHeight: "unset",
                "&.MuiTab-root": {
                  padding: "0.5rem",
                },
              }}
            ></Tab>
            <Tab
              component={Link}
              to={"/ContactUs"}
              label={"ContactUs"}
              sx={{
                minWidth: "unset",
                minHeight: "unset",
                maxWidth: "unset",
                maxHeight: "unset",
                "&.MuiTab-root": {
                  padding: "0.5rem",
                },
              }}
            ></Tab>
          </Tabs>
        </Box>
      </ThemeProvider>
  );
}
