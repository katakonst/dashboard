// @flow
import React, { Component } from 'react';
import styles from './Home.css';
import ReadFile from './ReadFile'

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  render() {
    return (
      <div className={styles.container} data-tid="container">
        <ReadFile/>
      </div>
    );
  }
}
