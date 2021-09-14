import React from 'react'
import styled, { keyframes } from 'styled-components'




const Image = styled.div`
    height: 200px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
`

const shine = keyframes`
  to {
      background-position-x: -200%;
    }
`;


const Card = styled.div`
  margin: 10px;
  width: 250px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  background: #eee;
  background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
  border-radius: 5px;
  background-size: 200% 100%;
  animation: 1.5s ${shine} linear infinite;
`
const DotPulse1 = keyframes`
  0% {
    box-shadow: 9999px 0 0 -5px;
}

30% {
  box-shadow: 9999px 0 0 2px;
}

60%,
100% {
  box-shadow: 9999px 0 0 -5px;
}
`
const DotPulseBefore = keyframes`
  0% {
    box-shadow: 9984px 0 0 -5px;
  }

  30% {
    box-shadow: 9984px 0 0 2px;
  }

  60%,
  100% {
    box-shadow: 9984px 0 0 -5px;
  }
`
const DotPulseAfter = keyframes`
  0% {
    box-shadow: 10014px 0 0 -5px;
  }

30% {
  box-shadow: 10014px 0 0 2px;
}

60%,
100% {
  box-shadow: 10014px 0 0 -5px;
}
`


const DotPulse = styled.div`
  position: relative;
  left: -9999px;

    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: rgba(251,151,124, 0.8);
    color: #9880ff;

  box-shadow: 9999px 0 0 -5px;
  animation: ${DotPulse1} 1.5s infinite linear;
  animation-delay: .25s;

  &::before,
  &::after {
    content: "";
    display: inline-block;
    position: absolute;
    top: 0;

   width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: #9880ff;
    color: rgba(251,151,124, 0.8);
}

&::before {
  box-shadow: 9984px 0 0 -5px;
  animation: ${DotPulseBefore} 1.5s infinite linear;
  animation-delay: 0s;
}

&::after {
  box-shadow: 10014px 0 0 -5px;
  animation: ${DotPulseAfter} 1.5s infinite linear;
  animation-delay: .5s;
}
`

const Stage = styled.div`
  margin: auto;
  height: 1rem;
  width: 20rem;
  padding-top: 10rem;
`
const DotShuttle1 = keyframes`
  0%,
  50%,
  100% {
    transform: translateX(0);
}

  25% {
    transform: translateX(-20px);
  }

  75% {
    transform: translateX(20px);
  }
`

const DotShuttle = styled.div`
  position: relative;
  left: -35px;
  width: 20px;
  height: 20px;
  border-radius: 12px;
  background-color: rgba(251,151,124, 0.8);
  color: transparent;
  margin: 0 auto;


  &::before,
  &::after {
    content: '';
    display: inline-block;
    position: absolute;
    top: 0;

    width: 20px;
    height: 20px;
    border-radius: 10px;
    background-color: rgba(251,151,124, 0.8);
    color: transparent;

    
  }
  &::before {
    left: 30px;
    animation: ${DotShuttle1} 2s infinite ease-out;
  }

  &::after {
    left: 30px;
  }
}
`

export const LoadingWrapper = styled.div`
    margin: 0 auto;
    height: 100vh;
    display: flex;
`

const Loading = () => {
  return (
    <LoadingWrapper>
      <Stage>
        <DotShuttle />
      </Stage>
    </LoadingWrapper>




  )
}

export default Loading
