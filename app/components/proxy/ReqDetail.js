import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import ReactJson from 'react-json-view'
import {Link} from "react-router-dom";
import routes from "../../constants/routes";

const useStyles = makeStyles({
  card: {
    minWidth: 275,
  },
  cardMargin: {
    marginTop: "10px"
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
  black: {
    color: 'black'
  },
  header: {
    fontSize: '14px'
  }
});

export default function ProxyPage(props) {
  if(!props.state.reqdetails)
  {
    return (<p>not</p>)
  }
  const classes = useStyles();
  return (
    <div>
      <div data-tid="backButton">
        <Link to={routes.PROXY}  className={classes.black} >
          <i className="fa fa-arrow-left fa-3x" />
        </Link>
      </div>
      <div className={classes.cardMargin}>
      <Card className={classes.card} variant="outlined">
        <CardContent>
          <p> Request Headers </p>
          <p className={classes.header}> Path: {props.state.reqdetails.reqDetail.Path} </p>
          <p className={classes.header}> Method: {props.state.reqdetails.reqDetail.Method} </p>
          <p className={classes.header}> Date: {props.state.reqdetails.reqDetail.Date} </p>
          {makeHeadersDetails(props.state.reqdetails.reqDetail.Headers, classes)}
        </CardContent>
      </Card>
        <div>
          <p>Request Body</p>
          {renderBody(props.state.reqdetails.reqDetail.RequestBody)}
        </div>
        <div>
          <p>Response Body</p>
      {renderBody(props.state.reqdetails.reqDetail.Body)}
        </div>
      </div>
    </div>
  );
}

const makeHeadersDetails = (headers, classes) => {
  let headerParagraphs = [];
    for (let prop in headers) {
      headerParagraphs.push((<p className={classes.header}>{prop} : {headers[prop][0]}</p>))
    }

  return headerParagraphs;
}

function renderBody(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return str;
  }
  return (<ReactJson src={JSON.parse(str)} />);
}
