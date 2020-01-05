import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import ReqTable from "./ReqTable";

const useStyles = makeStyles({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  reqTable: {
    marginTop: "24px"
  },
  detailsParagraph: {
    fontSize: "20px"
  }
});

export default function ProxyPage(props) {
  if(!props.result)
  {
    return (<p>Not Available</p>)
  }
  const classes = useStyles();
  const config = JSON.parse(props.result)
  return (
    <div>
    <Card className={classes.card} variant="outlined">
      <CardContent>
        <p> Proxy Details </p>
        <p className={classes.detailsParagraph}>Name: {config.name}</p>
        <p className={classes.detailsParagraph}>From Ip: {config.from}</p>
        <p className={classes.detailsParagraph}>To Ip: {config.from}</p>
        <p className={classes.detailsParagraph}>Protocol: {config.protocol}</p>
      </CardContent>
    </Card>
      <div className={classes.reqTable}>
      <ReqTable props={props.props} requests={props.requests}/>
      </div>
    </div>
  );
}
