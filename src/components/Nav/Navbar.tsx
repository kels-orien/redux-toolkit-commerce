import React from 'react'
import useState from 'react-usestateref'
import styled, { css } from 'styled-components'
import { mobileMax, mobileMaxExtra } from '../../utils/media';
import NavLinks from './NavLinks';
import { lightRed } from '../../utils/colors';
import { CartIcon, SearchIcon2, Logo } from '../Icons';
import rem from 'polished/lib/helpers/rem';
import { useUI } from '../../app/context';
import { NavButtonIcon } from '../Icons';
import Searchbar from '../Searchbar';
import { useAppSelector } from '../../app/hooks';
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'


const Wrapper = styled.nav`
    background: ${lightRed};
    width: 100%;
    color: white;
    position: fixed;
    top: 0px;
    z-index: 40;

   
`
const StartWrapper = styled.div`
    display: flex;
    align-items: center;
    height: ${rem(20 * 2)};
    justify-content: flex-start;
`;

const MidWrapper = styled.div`
    display: flex;
    align-items: center;
    padding-left: 5rem;


    ${mobileMax(css`
        padding-left:2rem;
    `)};
`

const EndWrapper = styled.ul`
display: flex;
align-items: center;
justify-content: flex-end;
`;

const NormalNavbar = styled.header`
  display: flex;
  align-items: center;
  padding: 0 ${rem(20)};
  justify-content: space-between;
  ${mobileMaxExtra(css`
    display: none;
`)};
`;

const IconLink = styled.a`
display: flex;
margin-right: ${rem(20)};
line-height: ${rem(20)};
transition: opacity 0.2s, transform 0.2s;
position: relative;
cursor: pointer;
color: white;
&:last-child {
  margin-right: 0;
}

&:hover,
&:focus {
  opacity: 0.8;
}

&:active {
  transform: scale(0.95);
  opacity: 0.6;
}
`
const NavIcons = styled.li`
    display: flex;
    align-item: end;
`
const SearchWrapper = styled.div`
    padding: 1rem;
`

const FlexWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    
`

const FlexWrapper2 = styled.div`
    display: flex;
   
`

const MobileNavbar = styled.header`
    display: none;

${mobileMaxExtra(css`
    align-items: center;
    background-color: ${lightRed};
    box-sizing: border-box;
    display: grid;
    column-gap: 1rem;
    grid-template-columns: auto auto;
    grid-template-rows: 64px;
    padding: 0px 1rem;
    position: fixed;
    width: 100%;
`)};

    
`


const MobileWrapper = styled.div`
    display: flex;  
    justify-content: space-between;
`
const MobileMidWrapper = styled.div`

`

const MobileEndWrapper = styled.div`
    justify-self: end;
`

const MobileUl = styled.ul`
    margin: 0px;
    align-items: center;
    list-style: none;
    padding: 0px;
    display: flex;
`

const MobileLi = styled.li`
    align-items: center;
    display flex;
    list-style: none;
    margin: 0px;
    padding: 0px;
`
const RightSeparator = styled.span`
    padding-right: 1rem;
`

const MobileLiWrapper = styled.div`
    align-items: center;
    display: flex;
    list-style: none;
    margin: 0px;
    padding: 0px;
`

const MobileA = styled.a`
    border-radius: 4px;
    display: inline-block;
    font-weight: 500;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: all 300ms cubic-bezier(0.19, 1, 0.22,1) 0s;
    vertical-align: bottom;
    font-size: 1rem;
    line-height: 1.5;
    color: white;
`

const MobileSearchWrapper = styled.div`
    grid-grow-start: 2;
    grid-column: 1 / -1;
`

const MobileSecondaryWrapper = styled.div`
    box-sizing: border-box;
    display: block;
    transition: all 300ms cubic-bezier(0.19, 1, 0.22, 1) 0s;
    padding: 0rem;
    margin: 0rem 0rem 1rem;

`

const MobileTertiaryWrapper = styled.div`
    box-sizing: border-box;
    display: block;
    transition: all 300ms cubic-bezier(0.19, 1, 0.22, 1) 0s;
    padding: 0rem;
    margin: 0rem;
`

const MobileFormWrapper = styled.div`
    box-sizing: border-box;
    flex-grow: 2;
    transition: all 300ms cubic-bezier(0.19, 1, 0.22, 1) 0s;
    padding: 0rem;
    margin: 0rem;
`
const MobileForm = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;

   
`

const MobileFormInputWrapper = styled.div`
    background-color: rgb(250,232,227);
    border-radius: 9999px;
    cursor: default;
    padding: 0.5rem 0.75rem;
    position: static;
    right: 0px;
    width: 100%;
    z-index: 1000;

    &:focus-within {
        background-color: white;
    }
`

const MobileFormInputWrapperTwo = styled.div`
    align-self: center;
    box-sizing: border-box;
    position: relative;
    transition: all 300ms cubic-bezier(0.19, 1, 0.22, 1) 0s;
    padding: 0rem;
    margin: 0rem;
`

const MobileFormInputWrapperThree = styled.div`
    appearance: none;
    background-color: transparent;
    border: none;
    margin-bottom: 0px;
    padding: 0px;
    cursor: pointer;
`

const MobileFormInputWrapperFour = styled.div`
    align-items: center;
    box-sizing: border-box;
    display: flex;
    transition: all 300ms cubic-bezier(0.19, 1, 0.22, 1) 0s;
    padding: 0rem;
    margin: 0rem;
`
const MobileFormInputWrapperFive = styled.div`
    align-self: center;
    -webkit-box-align: center;
    align-items: center;
    display: inline-flex;
    filter: none;
    cursor: pointer;
    vertical-align: unset;
    height: unset;
    width: unset;
`
const MobileInputBox = styled.input`
    background-color: rgb(250,232,227);
    border: 0px;
    font-weight: 500;
    line-height: 1rem;
    padding-left: 0.75rem;
    text-overflow: ellipsis;
    transition: all 300ms cubic-bezier(0.19, 1, 0.22, 1) 0s;
    width: 100%;
    z-index: 900;
    font-size: 0.875rem !important;
    color: black;

    &:focus-within {
        background-color: white;
    }
`

const CountSpan = styled.span`
    border: 1px;
    border-color: #000;
    background-color: rgb(87 72 72);
    border-radius: 9999px;
    border-width: 1px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: .75rem;
    line-height: 1rem;
    position: absolute;
    top: .75rem;
    right: .75rem;
    color: #ffffff;
    padding-left: 2.5px;
    padding-right: 2.5px;
    min-width: 1.25rem;
    min-height: 1.25rem;

`
const SpanWrapper = styled.span`
    height: 1rem;
    width: 1rem;
`
const countItem = (count: number, item: any) => count + item.quantity
const countItems = (count: number, items: any[]) =>
    items.reduce(countItem, count)

const Navbar = () => {
    const { toggleSidebar, toggleLeftSidebar, openModal } = useUI()
    const [value, setValue, ref] = useState('')
    const data = useAppSelector((state) => state.cart);
    const itemsCount = Object.values(data ?? {}).reduce(countItems, 0)
    const history = useHistory()

    const handleSearch = () => {
        let q = ref.current
        history.push(`/${q}`)
    }


    return (
        <Wrapper>
            <NormalNavbar>
                <FlexWrapper>
                    <StartWrapper>
                        <Link to={"/"}><Logo /></Link>
                    </StartWrapper>
                    <MidWrapper>
                        <NavLinks />


                    </MidWrapper>
                </FlexWrapper>

                <FlexWrapper2>
                    <SearchWrapper>
                        <Searchbar />
                    </SearchWrapper>

                    <EndWrapper>
                        <NavIcons>
                            <IconLink href="#" onClick={() => openModal()}>
                                Sign In
                            </IconLink>
                            <IconLink onClick={toggleSidebar} href="#">
                                <CartIcon />
                                {itemsCount > 0 && <CountSpan>{itemsCount}</CountSpan>}
                            </IconLink>
                        </NavIcons>
                    </EndWrapper>
                </FlexWrapper2>

            </NormalNavbar>

            <MobileNavbar>
                <MobileWrapper>
                    <IconLink onClick={toggleLeftSidebar} href="#"><NavButtonIcon /></IconLink>
                    <MobileMidWrapper>
                        <Link to={"/"}><Logo /></Link>
                    </MobileMidWrapper>
                </MobileWrapper>

                <MobileEndWrapper>
                    <MobileUl>
                        <MobileLi>
                            <MobileLiWrapper>
                                <MobileA href="#" onClick={() => openModal()}>
                                    Sign In
                                    <RightSeparator />
                                </MobileA>
                            </MobileLiWrapper>
                        </MobileLi>
                        <MobileLi>
                            <MobileLiWrapper>
                                <IconLink onClick={toggleSidebar} href="#">
                                    <CartIcon />
                                    {itemsCount > 0 && <CountSpan>{itemsCount}</CountSpan>}
                                </IconLink>
                            </MobileLiWrapper>
                        </MobileLi>
                    </MobileUl>
                </MobileEndWrapper>
                <MobileSearchWrapper>
                    <MobileSecondaryWrapper>
                        <MobileTertiaryWrapper>
                            <MobileFormWrapper>
                                <MobileForm type="search" aria-label="Search" autocomplete="off" name="search" placeholder="Find an Item">
                                    <MobileFormInputWrapper>
                                        <MobileFormInputWrapperTwo>
                                            <MobileFormInputWrapperThree>
                                                <MobileFormInputWrapperFour>
                                                    <MobileFormInputWrapperFive>
                                                        <SpanWrapper onClick={() => handleSearch()}>
                                                            <SearchIcon2 />
                                                        </SpanWrapper>
                                                    </MobileFormInputWrapperFive>

                                                    <MobileInputBox type="search" aria-label="Search" autocomplete="off" name="search" placeholder="Find an Item" onChange={(e: any) => { setValue(e.target.value) }}
                                                        onKeyUp={(e: any) => {
                                                            e.preventDefault()

                                                            if (e.key === 'Enter') {
                                                                const q = e.currentTarget.value

                                                                history.push(`/${q}`)

                                                            }
                                                        }} />


                                                </MobileFormInputWrapperFour>
                                            </MobileFormInputWrapperThree>
                                        </MobileFormInputWrapperTwo>
                                    </MobileFormInputWrapper>
                                </MobileForm>
                            </MobileFormWrapper>
                        </MobileTertiaryWrapper>
                    </MobileSecondaryWrapper>
                </MobileSearchWrapper>
            </MobileNavbar>

        </Wrapper>
    )
}

export default Navbar
