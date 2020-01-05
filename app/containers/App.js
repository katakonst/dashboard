// @flow
import * as React from 'react';
import NavBar from '../components/NavBar'

type Props = {
  children: React.Node
};

export default class App extends React.Component<Props> {
  props: Props;

  render() {
    const { children } = this.props;
    return <><NavBar childrens={children}></NavBar></>;
  }
}
