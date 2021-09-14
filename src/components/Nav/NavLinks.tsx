import React from 'react'
import styled from 'styled-components'
import rem from '../../utils/rem';
import NavSeparator from './NavSeparator';
import NavItem from './NavItem';
import MainNavigationBoxExtras from './MainNavigationBoxExtras';
import { Link } from 'react-router-dom'


const Wrapper = styled.nav`
    display: flex;
    align items: center;
    margin-right: ${rem(20)};
    flex: 0 0 auto;
`

const NavLink = styled.a`
  letter-spacing: ${rem(0.4)};
  color: white;

  &:hover,
  &:focus {
    opacity: 0.8;
  }

  &:active {
    transform: scale(0.95);
    opacity: 0.6;
  }
`;


const NavigationBoxesExtra = styled.div`
  display: block;
  flex-flow: row nowrap;
`;


const NavLinks = () => {
    return (
        <Wrapper>
           <NavItem
            dropdownContent = {
              <NavigationBoxesExtra>
                  <MainNavigationBoxExtras
                  links={[
                    {
                      label: "Electronics",
                      to: "/products/category/electronics"
                    },
                    {
                      label: "Jewelry",
                      to: "/products/category/jewelery"
                    },
                    {
                      label: "Men's Clothing",
                      to: "/products/category/men's clothing"
                    },
                    {
                      label: "Women's Clothing",
                      to: "/products/category/women's clothing"
                  }]}/>
              </NavigationBoxesExtra>
            }
            label="Categories"
            />
            <NavSeparator/>
            <Link to ={"/products/newarrivals"}><NavLink>New Arrivals</NavLink></Link>
            <NavSeparator/>
            <Link to ={"/products/topdeals"}><NavLink>Top Deals</NavLink></Link>
           

        </Wrapper>
    )
}

export default NavLinks
