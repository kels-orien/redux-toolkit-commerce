import Portal from '@reach/portal'
import React, { FC, useEffect, useRef } from 'react'
import {
    disableBodyScroll,
    enableBodyScroll,
    clearAllBodyScrollLocks
} from 'body-scroll-lock'
import styled, { css } from 'styled-components'
import { mobile } from '../../utils/media'
import { accent1 } from '../../utils/colors'

import  { useUI } from '../../app/context'

interface Props {
    children: any
    open: boolean
    onClose: () => void
}

const Wrapper =  styled.div`
    height: 100%;
    overflow: hidden;
    position: fixed;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    z-index: 50;
`

const SecondaryWrapper = styled.div`
    top: 0px;
    bottom: 0px;
    right: 0;
    left: 0;
    outline: 2px solid transparent;
    outline-offset: 2px;
    max-width: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0, 0.3);
`

const TertiaryWrapper = styled.div`
    transition-property: opacity;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
    top: 0px;
    left: 0px;
    bottom: 0px;
    right: 0px;
    background: rgba(0,0,0, 0.5);
`

const SectionWrapper = styled.section`
    outline: 2px solid transparent;
    outline-offset: 2px;
    max-width: 100%;
    display: flex;
`

const SectionPrimaryWrapper = styled.div`
    top: 0px;
    left: 0px;
    bottom: 0px;
    right: 0px;
`

const SectionSecondaryWrapper = styled.div`
    height: 100%;
    max-width: 26rem;
    width: 100vw;
`

const SectionTertiaryWrapper = styled.div`
    height: 100%;
    overflow-y: auto;
    flex-direction: column;
    background: ${accent1};
    min-width: 15rem;
`

const SideBar: FC<Props> = ({children, open = false, onClose }) => {


    const { closeSidebar }  = useUI()
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

    const handleClose = () => closeSidebar()

    return (
        <Portal>
            { open ? (
                <Wrapper ref = {ref} >
                    <SecondaryWrapper>
                        <TertiaryWrapper onClick={handleClose}></TertiaryWrapper>
                        <SecondaryWrapper onClick={handleClose}/>
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


export default SideBar