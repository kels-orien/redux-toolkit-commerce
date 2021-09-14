import styled, {css} from 'styled-components'
import { mobileMax } from  '../utils/media'

const Main = styled.div`
    margin: 0 auto;
    padding-top: 4rem;

    ${mobileMax(css`
    padding-top: 7.5rem;
    `)};

`

export default Main