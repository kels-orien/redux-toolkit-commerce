import React, { FC, useRef, useEffect, useCallback } from 'react'
import Portal from '@reach/portal'
import {
    disableBodyScroll,
    enableBodyScroll,
    clearAllBodyScrollLocks,
  } from 'body-scroll-lock'
import styled from 'styled-components'

import { CloseIcon } from '../components/Icons'

  interface Props {
    className?: string
    children?: any
    open?: boolean
    onClose: () => void
    onEnter?: () => void | null
  }


  const Wrapper = styled.div`
    position: fixed;
    background-color: rgba(0, 0, 0, 0.5);
    color: black
    display: flex;
    align-items: center;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    z-index: 50;
    justify-content: center;
  `
  const Button = styled.button`
    color: rgba(107, 114, 128, 1);
    transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
    opacity: 1;
    outline: 2px solid transparent;
    outline-offset: 2px;
    right: 0;
    top: 0;
    position: absolute;
    margin: 1.5rem;
  `
   const ModalWrapper = styled.div`
    background-color: white;
    padding: 3rem;
    border-width: 1px;
    border-color: #e9ecef;
    position: relative;


    &:focus {
        outline: 2px solid transparent;
        outline-offset: 2px;
    }
   `
const Modal : FC<Props> = ({ children, open, onClose, onEnter = null }) => {
    const ref = useRef() as React.MutableRefObject<HTMLDivElement>


    const handleKey = useCallback(
        (e: KeyboardEvent) => {
          if (e.key === 'Escape') {
            return onClose()
          }
        },
        [onClose]
      )
    useEffect(() => {
        if (ref.current) {
          if (open) {
            disableBodyScroll(ref.current)
            window.addEventListener('keydown', handleKey)
          } else {
            enableBodyScroll(ref.current)
          }
        }
        return () => {
          window.removeEventListener('keydown', handleKey)
          clearAllBodyScrollLocks()
        }
      }, [open, handleKey])
    return (
        <Portal>
             {open ? (
        <Wrapper>
          <ModalWrapper role="dialog" ref={ref}>
            <Button
              onClick={() => onClose()}
              aria-label="Close panel"
            >
              <CloseIcon  />
            </Button>
            {children}
          </ModalWrapper>
        </Wrapper>
      ) : null}
            
        </Portal>
    )
}

export default Modal
