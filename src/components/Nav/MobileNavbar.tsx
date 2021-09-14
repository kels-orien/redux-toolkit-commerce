import React from 'react'
import styled, { css } from 'styled-components'
import { mobile } from '../../utils/media'
import rem from 'polished/lib/helpers/rem'
import { navbarHeight } from '../../utils/sizes'
import { lightRed } from '../../utils/colors'
import NavButton from './NavButton'
import { CloseIcon, FoldIcon } from '../Icons'

const Wrapper = styled.div`
    ${mobile(css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: ${rem(navbarHeight)};
`)}
`

const SecondaryMenu = styled.div`
    position: absolute;
    top: ${ rem(20)};
    left: 0;
    right: 0;

    ${(p:any) =>
        p.isOpen
          ? css`
              height: ${rem(navbarHeight)};
            `
          : css`
              height: 0;
            `} display: flex;
      flex-wrap: nowrap;
      align-items: center;
      justify-content: space-between;
      padding: 0 ${rem(20)};
      transition: height 0.1s;
    
      user-select: none;
      -webkit-overflow-scrolling: touch;
      overflow-x: scroll;
      overflow-y: hidden;
    
      background: ${lightRed};
      color: #868686;${(p:any) =>p.isOpen} ? css``
`

const MobileNavbar = (props: any) => {
    const { isSideFolded, isMobileNavFolded, onSideToggle, onMobileNavToggle, showSideNav, onSearchButtonClick } = props;

    return (
        <Wrapper>
            {showSideNav !== false &&(
                <NavButton active={!isSideFolded} onClick={onSideToggle}>
                {isSideFolded ? <FoldIcon /> : <CloseIcon />}
              </NavButton>
            )}
        </Wrapper>
    )
}

export default MobileNavbar
