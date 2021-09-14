import styled from 'styled-components'
import { lightRed } from '../utils/colors'


 const Button = styled.a`
    background-color: ${lightRed};
    border-color: transparent;
    border-radius: .125rem;
    border-width: 1px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    line-height: 1.5rem;
    padding: .7rem 2.5rem;
    box-shadow: 0 0 transparent, 0 0 transparent, 0 1px 2px 0 rgba(0,0,0,0.05);
    text-align: center;
    color: rgb(241 243 245);
    transition-property: background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;
    transition-timing-function: cubic-bezier(.4,0,.2,1);
    transition-duration: .15s;
    width: 100%;
    letter-spacing: .1rem;

    &: hover {
            background-color: rgb(248 249 250);
            border-width: 1px;
            color: rgb(0 0 0);
            border: 1px solid rgb(0 0 0);
    }

    
`

export default Button