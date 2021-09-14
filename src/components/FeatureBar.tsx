import React from 'react'
import styled, {css} from 'styled-components'
import { mobileMaxExtra } from '../utils/media'
import Button from '../components/Button'
import { useAcceptCookies } from '../app/useAcceptCookies'

const Wrapper = styled.div`
    background-color: white;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    font-size: .875rem;
    line-height: 1.25rem;
    padding: 1.5rem;
    position: fixed;
    bottom: 0;
    text-align: center;
    width: 100%;
    z-index: 30;
    --tw-translate-x: 0;
    --tw-translate-y: 0;
    --tw-rotate: 0;
    --tw-skew-x: 0;
    --tw-skew-y: 0;
    --tw-scale-x: 1;
    --tw-scale-y: 1;
    transition-property: all;
    transition-timing-function: cubic-bezier(.4,0,.2,1);
    transition-duration: .15s;
    transition-timing-function: cubic-bezier(0,0,.2,1);
    transition-duration: .3s;


    transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));

      

    ${mobileMaxExtra(css`
        display: flex;
        text-align: left;
    `)};

`

const Span = styled.span`
    display: block;
    margin-bottom: 1.5rem;

    
    ${mobileMaxExtra(css`
        display: inline;
        margin-bottom: 0;
        margin-left: .5rem;
}
    `)};
`


const SpanWrapper = styled.span`
    display: block;

    ${mobileMaxExtra(css`
        margin-left: .5rem;
        margin-bottom: 0;
        display: inline;
    `)};
`

const ButtonWrapper = styled.div`
    width: 25%;
    margin: 0 auto;
`


interface FeatureBarProps {
    action?:React.ReactNode
  }



const FeatureBar: React.FC<FeatureBarProps> = () => {
    const { acceptedCookies, onAcceptCookies } = useAcceptCookies()
    
    return (
    
    <>

{!acceptedCookies ? ( <Wrapper>
            <Span>
            This site uses cookies to improve your experience. By clicking, you agree to our Privacy Policy.
            </Span>
            <SpanWrapper>
            </SpanWrapper>
            
            <ButtonWrapper><Button  onClick={() => onAcceptCookies()}>
              Accept cookies
            </Button> </ButtonWrapper>
        </Wrapper>): (null)}
       
    </>
    )
}

export default FeatureBar


