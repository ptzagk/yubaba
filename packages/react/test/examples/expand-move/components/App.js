// @flow

import React from 'react';
import Box from './Box';
import withTransition from '../../../../src/withTransition';

const Container = ({ children }: any) => (
  <div>
    {children}
  </div>
);

const BoxWithTransition = withTransition([{
  transition: 'expand',
  duration: 0.4,
  background: '#3d7596',
  autoStart: true,
  cover: true,
}, {
  transition: 'move',
  duration: 0.75,
  matchSize: true,
  autoCleanup: true,
}])(Box);

const BoxWithReverseTransition = withTransition([{
  transition: 'expand',
  duration: 0.4,
  background: '#3d7596',
  reverse: true,
  cover: true,
}, {
  transition: 'move',
  duration: 0.75,
  matchSize: true,
  autoCleanup: false,
}])(Box);

export default class App extends React.Component {
  state = {
    big: false,
  };

  toggle = () => {
    this.setState((prevState) => ({
      big: !prevState.big,
    }));
  };

  render () {
    return (
      <div>
        {this.state.big && <Container><BoxWithReverseTransition transitionPair="box-to-box" type="big" onClick={this.toggle} /></Container>}

        {this.state.big || <Container><BoxWithTransition transitionPair="box-to-box" type="small" onClick={this.toggle} className="float-right" /></Container>}
      </div>
    );
  }
}
