import React from 'react'
import { FoldIcon2 } from '../Icons';
import styled from 'styled-components'

const MainNavigationLink = styled.a.attrs({
    href: "#",
    onClick: evt => {
      evt.preventDefault();
    }
  })`
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    height: 100%;
    text-decoration: none;
  
    :hover {
      color: #dddddd;
    }
  `;

  const NavLinkDropdown = styled.div`
  background-color: rgb(241 243 245);
  border-radius: 4px;
  display: none;
  position: absolute;
  left: 0;
  top: 100%;
`;

const Wrapper = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  :hover ${NavLinkDropdown} {
    display: block;
  }
`;

const LinkWrapper = styled.div`
  padding-left: 0.1rem;
  padding-right: 0.1rem;
`
const SvgWrapper = styled.div`
  padding-left: 0.1rem;
  padding-right: 0.1rem;
`
const NavItem = ({ dropdownContent, label}) => {
    return (
        <Wrapper>
            <LinkWrapper><MainNavigationLink>{label}</MainNavigationLink></LinkWrapper>
            <SvgWrapper><FoldIcon2/></SvgWrapper>
            {dropdownContent && <NavLinkDropdown>{dropdownContent}</NavLinkDropdown>}
        </Wrapper>
    )
}

export default NavItem
