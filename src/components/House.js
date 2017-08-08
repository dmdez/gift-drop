import styled, { keyframes } from 'styled-components'

const move = keyframes`
  from {
    right: 0;
  }
  to {
    right: 100%;
  }
`

const House = styled.div`
  position: absolute;
  width: ${props => `${props.scale * 150}px` };
  height: ${props => `${props.scale * 200}px` };
  border: 1px solid red;
  bottom: 0;
  right: 0;
  animation: ${move} 2s forwards linear;
  animation-iteration-count: 1;
`

export { House as default }
