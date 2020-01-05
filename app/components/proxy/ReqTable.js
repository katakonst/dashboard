import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import MaterialTable from 'material-table';
import { useHistory } from "react-router-dom";

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
});

export default function ReqTable(props) {
  if(!props.requests)
  {
    return (<p>Not available</p>)
  }
  const history = useHistory();

  const columns = [
    { title: 'Path', field: 'Path' },
    { title: 'Method', field: 'Method' },
    { title: 'Status', field: 'Status' },
    { title: 'Date', field: 'Date' }
  ]
  const classes = useStyles();
  let requests = props.requests.map(x=>
  {
    let req = JSON.parse(x)
    req.Date = new Date(req.Timestamp * 1000).toISOString()
    return req
  })
  return (
    <MaterialTable
      title="Request list"
      columns={columns}
      data={requests}
      actions={[
        {
          icon: 'save',
          tooltip: 'View Req',
          onClick: (event, rowData) => {
            console.log(rowData)
            props.props.setDetail(rowData)
            history.push(`/detail`);
          }
        }
      ]}
options={{
  filtering: true
}}/>);
}
