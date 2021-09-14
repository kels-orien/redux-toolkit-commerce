import React, {FC, useEffect, useRef} from 'react'
import Portal from '@reach/portal'
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks} from 'body-scroll-lock'
import styled, {css} from 'styled-components'
import { mobile } from '../utils/media'
import { accent1 } from './../utils/colors'

interface Props {
    children: any
    open: boolean
    onClose: () => void
}


const Wrapper = styled.div `
    position: fixed;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    overflow: hidden;
    height: 100%;
    z-index: 50;
    width: 100%;
`

const SecondaryWrapper= styled.div`
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    overflow: hidden
    width: 100%;
`
const TertiaryWrapper = styled.div`
    transition-property: opacity;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    position: absolute;
    background-color: rgba(0,0,0, 0.5);
`

const SectionWrapper = styled.section`
    outline: 2px solid transparent;
    outline-offset: 2px;
    max-width: 100%;
    display: flex;
    position: absolute;
    top: 0px;
    bottom: 0px;
    width: 100%;
`
const SectionSecondaryWrapper = styled.div`
    height: 100%;
    width: 100%;
`

const SectionTertiaryWrapper = styled.div`
    height: 100%;
    overflow-y: auto;
    flex-direction: column;
    background: ${accent1};
`

const LeftSidebar: FC<Props> = ({ children, open=false, onClose}) => {
    
    const ref = useRef() as React.MutableRefObject<HTMLDivElement>
    
    useEffect(() => {
        if(ref.current) {
            if(open) {
                disableBodyScroll(ref.current)
            } else {
                enableBodyScroll(ref.current)
            }
        }
        return () => {
            clearAllBodyScrollLocks()
        }
    }, [open])

    return (
        <Portal>
         { open ? (
                <Wrapper ref = {ref}>
                    <SecondaryWrapper>
                            <SectionWrapper>
                                <SectionSecondaryWrapper>
                                    <SectionTertiaryWrapper>
                                        {children}
                                    </SectionTertiaryWrapper>
                                </SectionSecondaryWrapper>
                            </SectionWrapper>
                        
                    </SecondaryWrapper>
                </Wrapper>
            ): null}

    </Portal>
    )
}

export default LeftSidebar
