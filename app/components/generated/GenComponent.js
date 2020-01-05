import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Status from './Status'

const useStyles = makeStyles({
  card: {
    maxWidth: "90%",
    marginTop: '24px'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 32,
  },
  pos: {
    marginBottom: 12,
  },
  status: {
    maxWidth: '200px'
  },
  topPading: {
    padding: '24px'
  },
  misc : {
    textAlign: "left",
    fontSize: "14px"
  },
});

export default function GenComponent(props) {
  const component = props.props;
  const classes = useStyles();
  return (
    <Card className={classes.card} variant="outlined">
      <CardContent>
        <Typography className={classes.title} gutterBottom>
          {component.name}
        </Typography>
        {createMisc(component.misc, classes)}
           <div className={classes.status}>
             <span> Status: </span> <Status url={component.healthcheck}/>
           </div>
      </CardContent>
      <CardActions>
        {createButtons(component)}
      </CardActions>
    </Card>
  );
}

const createButtons = (component) => {
  let buttons = []

  for (let i = 0; i < component.buttons.length; i++) {
    if(component.buttons[i].type === "url") {
      buttons.push(<Button key={i} variant="contained" color="secondary"
                           onClick={()=>click(component.buttons[i].url)}>
        {component.buttons[i].name}
      </Button>)
    } else if(component.buttons[i].type === "command") {
      buttons.push(<Button key={i} variant="contained" color="secondary"
                           onClick={()=>command(component.buttons[i].command)}>
        {component.buttons[i].name}
      </Button>)
    }
  }

  return buttons
}

const createMisc = (misc, classes) => {
  if(!misc) {
    return
  }
  let miscs = []
  for(let i=0; i<misc.length ;i++) {
    miscs.push(<p className={classes.misc}> {misc[i].name} : {misc[i].value} </p>)
  }
  return miscs
}

const click = (url) => {
  const { shell } = require('electron')
  shell.openExternal(url)
}

const command = (command) => {
  const Shell = require('node-powershell');

  const ps = new Shell({
    executionPolicy: 'Bypass',
    noProfile: true
  });

  ps.addCommand(command);
  ps.invoke()
    .then(output => {
      console.log(output);
    })
    .catch(err => {
      console.log(err);
    });
}
