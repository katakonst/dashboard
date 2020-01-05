import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes.json';
import Button from '@material-ui/core/Button'
import fs from 'fs'
import * as path from 'path';
import GenList from "./generated/GenList";


function read(callback) {
  let values = [];

  fs.readFile(
    path.resolve(__dirname, './test.txt'),
    'utf-8',
    (err, data) => {
      if (err) throw err;
      values = data.toString();

      return callback(values);
    }
  );
}

export default class ReadFile extends Component<Props> {
  props: Props;
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    read((result) => {
      this.setState({
        result,
      });
    });
  }

  render() {
    return (
      <div data-tid="container">
         <GenList props={this.state.result}/>
      </div>
    );
  }
}


