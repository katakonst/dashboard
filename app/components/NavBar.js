import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {Link} from "react-router-dom";
import routes from "../constants/routes";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  toolbar: theme.mixins.toolbar,
}));

export default function NavBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar} />
        <List>
          <ListItem button key="Components" component={Link}  to={routes.HOME}>
              <ListItemText primary="Components" />
              <Link to={routes.HOME}>
                <i className="fa fa-arrow-left fa-3x" />
              </Link>
            </ListItem>
          <ListItem button key="Proxy" component={Link}  to={routes.PROXY}>
            <ListItemText primary="Proxy" />
            <Link to={routes.PROXY}>
              <i className="fa fa-arrow-left fa-3x" />
            </Link>

          </ListItem>

        </List>

      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {props.childrens}
      </main>
    </div>
  );
}
