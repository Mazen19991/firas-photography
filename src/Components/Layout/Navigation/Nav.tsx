import React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { ThemeProvider, createTheme } from "@mui/material/styles";

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

interface LinkTabProps {
  label?: string;
  href?: string;
}

function LinkTab(props: LinkTabProps) {
  return (
    <Tab
      component="a"
      sx={{
        minWidth: "unset", // Ensure no minimum width
        minHeight: "unset", // Ensure no minimum height
        maxWidth: "unset", // Ensure no minimum width
        maxHeight: "unset", // Ensure no minimum height
        "&.MuiTab-root": {
          padding: 0.3, //Additional style for certain versions of Material-UI
        },
      }}
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        // Routing libraries handle this, you can remove the onClick handle when using them.
        if (Nav(event)) {
          event.preventDefault();
        }
      }}
      {...props}
    />
  );
}

export default function NavTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    // event.type can be equal to focus with selectionFollowsFocus.
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
      <Box sx={{
        marginRight:"11.5%"
      }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
          sx={{
            minWidth: "unset", // Ensure no minimum width
            minHeight: "unset", // Ensure no minimum height
            maxWidth: "unset", // Ensure no minimum width
            maxHeight: "unset", // Ensure no minimum height
            "& .MuiTabs-active":{
            }
          }}        >
          <LinkTab label="Home" />
          <LinkTab label="About Me" />
          <LinkTab label="Portfolio" />
          <LinkTab label="Blog" />
          <LinkTab label="Contact Us" />
        </Tabs>
      </Box>
    </ThemeProvider>
  );
}
