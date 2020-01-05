// @flow
import React, { Component } from 'react';
import fs from 'fs'
import * as path from 'path';
import ProxyPage from "./ProxyPage";

function read(callback) {
  let values = [];

  fs.readFile(
    path.resolve(__dirname, './proxy.json'),
    'utf-8',
    (err, data) => {
      if (err) throw err;
      values = data.toString();

      return callback(values);
    }
  );
}

type Props = {};

export default class Proxy extends Component<Props> {
  props: Props;
  state = {}

  componentDidMount() {
    read((result) => {
      this.setState({
        result,
      });
    });
  }

  render() {
    console.log(this.props)
    return (
      <div data-tid="container">
        <ProxyPage props={this.props} result={this.state.result} requests={this.props.state.proxy.payload}/>
      </div>
    );
  }
}


