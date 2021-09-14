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

const Skeleton = () => {
    return (
        <Card>
            <Image />
        </Card>
    )
}

export default Skeleton
