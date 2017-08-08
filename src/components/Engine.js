import React, { PropTypes, Component } from 'react'
import ReactDOM from 'react-dom'
import { Body } from 'react-game-kit'
import Houses from './Houses'
import House from './House'
import Santa from './Santa'

const sleighSpeed = 8

class Engine extends Component {
  static contextTypes = {
    loop: PropTypes.object,
    scale: PropTypes.number
  }

  constructor() {
    super()
    this.state = {
      houses: [],
      tic: 0,
      santaPos: 0
    }
  }

  update = () => {
    const { houses, tic, santaPos } = this.state

    if ( tic % 100 === 0 )
      houses.push({})

    //const node = ReactDOM.findDOMNode(this.refs.santa)
    //const rect = node.getBoundingClientRect()
    //console.log(rect)

    this.setState({
      houses,
      tic: tic + 1,
      santaPos: this.setSantaPosition(santaPos)
    })
  }

  setSantaPosition(pos) {
    const { keys } = this.props

    if ( keys.isDown(keys.DOWN) && pos <= 250 ) {
      pos = pos + sleighSpeed
    }

    if ( keys.isDown(keys.UP) && pos >= -5 ) {
      pos = pos - sleighSpeed
    }

    return pos
  }

  componentDidMount() {
    this.context.loop.subscribe(this.update)
  }

  componentWillUnmount() {
    this.context.loop.unsubscribe(this.update)
  }

  render() {
    const { houses, santaPos } = this.state
    const { scale } = this.context

    return <div>
      <Santa ref="santa" scale={scale} pos={santaPos} />
      <Houses scale={scale}>
        {
          houses.map((house, i) => {
            return <House scale={scale} key={i} />
          })
        }
      </Houses>
    </div>
  }
}

export { Engine as default }
