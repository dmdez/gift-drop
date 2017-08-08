import styled, { keyframes } from 'styled-components'

const Santa = styled.div`
  position: absolute;
  top: ${props => `${props.pos * props.scale}px`};
  right: 0;
  width: ${props => `${props.scale * 150}px` };
  height: ${props => `${props.scale * 100}px` };
  border: 1px solid red;
  transition: top .2s;
`

export { Santa as default }
