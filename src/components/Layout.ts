import styled , { css } from 'styled-components'
import { mobileMax } from "../utils/media"


export const Wrapper = styled.div`
  max-width: 1240px;  
  display: block;
    margin: 0 auto;
`

export const CardWrapper = styled.div`
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

export const Container = styled.div`

  display: flex;
  flex-flow: wrap;
  justify-content: center;
`

export const Main = styled.main`
  margin: 0 auto;
  padding-top: 4rem;

    ${mobileMax(css`
      padding-top: 7.5rem;
  `)};
`