import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Home from "@mui/icons-material/Home";
import Button from "@mui/material/Button";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SchoolIcon from "@mui/icons-material/School";
import SourceIcon from "@mui/icons-material/Source";
import CollectionsIcon from "@mui/icons-material/Collections";
import SitemapIcon from "@mui/icons-material/LineAxis";
import CelebrationIcon from "@mui/icons-material/Celebration";
import Feedback from "@mui/icons-material/Feedback";
import Footer from "./Footer";
import Link from "next/link";
import classes from "./Layout.module.css";
import Head from "next/head";
import HomeIcon from "@mui/icons-material/Home";
import Questions from "@mui/icons-material/QuestionAnswer";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import PersonIcon from "@mui/icons-material/Person";
const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(0),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 2),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function Header({ children, title }) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleClick = () => {};
  return (
    <>
      <Head>
        <title>{title ? title : "DETS CONNECT"}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="fixed" open={open} sx={{ background: "#211541" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: "none" }) }}
            >
              <MenuIcon />
            </IconButton>
            <Link href={"/"}>
              <Home sx={{ textAlign: "center", cursor: "pointer" }} />
            </Link>

            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ textAlign: "center", width: "100%", cursor: "pointer" }}
            >
              DETS CONNECT
            </Typography>
            <Button color="success" onClick={handleClick}>
              Signup
            </Button>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <h4>Quick Links</h4>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            {links.map((link, index) => (
              <Link href={link.path} key={index}>
                <ListItem button>
                  <ListItemIcon>{link.icon}</ListItemIcon>
                  <ListItemText primary={link.title} />
                </ListItem>
              </Link>
            ))}
          </List>
          <Divider />
          <List>
            {others.map((link, index) => (
              <Link href={link.path} key={index}>
                <ListItem button>
                  <ListItemIcon>{link.icon}</ListItemIcon>
                  <ListItemText primary={link.title} />
                </ListItem>
              </Link>
            ))}
          </List>
        </Drawer>
        <Main open={open}>
          <DrawerHeader />
          <main className={classes.mainContent}>{children}</main>
          <Footer />
        </Main>
      </Box>
    </>
  );
}

const links = [
  { title: "Home", path: "/", icon: <HomeIcon /> },
  { title: "Notice", path: "/notice", icon: <NotificationsIcon /> },
  { title: "Alumni", path: "/alumni", icon: <SchoolIcon /> },
  { title: "Gallery", path: "/gallery", icon: <CollectionsIcon /> },
];

const others = [
  { title: "Events & News", path: "/events", icon: <CelebrationIcon /> },
  { title: "Profile", path: "/events", icon: <PersonIcon /> },
  { title: "FAQS", path: "/faqs", icon: <Questions /> },
  { title: "Feedback", path: "/feedback", icon: <Feedback /> },
  { title: "Sitemap", path: "/sitemap", icon: <SitemapIcon /> },
];
