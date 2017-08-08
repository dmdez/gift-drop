import React, { Component } from 'react'
import './App.css'
import { Loop, Stage, World, KeyListener } from 'react-game-kit'
import Engine from './components/Engine'

class App extends Component {

  constructor(props) {
    super(props);
    this.keyListener = new KeyListener();
  }

  componentDidMount() {
    this.keyListener.subscribe([
      this.keyListener.LEFT,
      this.keyListener.RIGHT,
      this.keyListener.UP,
      this.keyListener.DOWN,
      this.keyListener.SPACE
    ])
  }

  componentWillUnmount() {
    this.keyListener.unsubscribe();
  }

  render() {
    return (
      <Loop>
        <Stage style={{
          background: '-webkit-gradient(linear, left top, left bottom, from(#000), to(#100E52))',
          border: '1px solid white'
        }}>
          <World>
            <Engine keys={this.keyListener} />
          </World>
        </Stage>
      </Loop>
    )
  }
}

export default App;
