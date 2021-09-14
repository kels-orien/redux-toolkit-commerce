import React, { useState } from 'react'
import { useUI } from '../app/context'
import styled from 'styled-components'
import { CartIcon, CloseIcon, FoldIcon } from './Icons'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'




const Wrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
`

const Header = styled.header`
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
`

const HeaderWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
`

const SecondaryHeaderWrapper = styled.div`
    height: 1.75rem;
    display: flex;
    align-items: center;
    padding-top: 1.5rem;
`
const CrossButton = styled.button`
    transition-timing-function: cubic-bezier(.4,0,.2,1);
    transition-duration: .15s;
    box-sizing: border-box;
    border: 0 solid #e5e7eb;
    cursor: pointer;
`

const CenterWrapper = styled.div`
    flex: 1 1 0%;
    padding-left: 1rem;
    padding-right: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-item: center;
`

const CenterSpan = styled.span`
    border-width: 1px;
    border-style: dashed;
    border-color: rgba(255, 255, 255, 0.5);
    border-radius: 9999px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4rem;
    height: 4rem;
`


const CartWrapper = styled.div`
    padding-left: 1px;
    flex: 1 1 0%;
`

const Heading = styled.h2`
    padding-top: 0.25rem;
    padding-bottom: 1rem;
    font-size: 1.5rem;
    line-height: 2rem;
    line-height: 1.75rem;
    font-weight: 700;
    letter-spacing:0.025em
`
const HeadingUnderline = styled.ul`
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
`



const GlobalHeaderMini = styled.nav`
    top: 0;
    left: 0;
    right: 0;
    height: 30rem;
    padding: 64px 1rem 1em;
    z-index: -1;
    overflow: auto;
    display: block;
    width: 100%;
    align-content: flex-start;
`

const GlobalHeaderMiniList = styled.ul`
    margin: 0px;
    list-style: none;
    padding-left: 0;

`

const GlobalHeaderMiniItem = styled.li`
    list-style: none;
    padding-left: 0;
    border-top: 1px solid rgb(229 227 221);
`
const GlobalHeaderMiniItemToggle = styled.button`
    

    &:first-child { 
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: row;
        height: 3.75rem;
        font-weight: 500;
        width: 100%;
    }
 `

const ButtonWrapper = styled.div`
    align-self: center;
    align-items: center;
    display: inline-flex;
    filter: none;
    cursor: unset;
    vertical-align: unset;
    height: unset;
    width: unset;
`

const ButtonSpan = styled.span`
    height: 1rem;
    width: 1rem;
    display: flex;
    cursor: unset;
    font-weight: 500;
    align-self: center;
    fill: transparent;
    stroke-width: 1.2px;
`

const GlobalHeaderMiniContent = styled.ul`
    display:${(props: any) => props.display};
    margin-bottom: 1rem;
    padding-left: .4rem;            
`

const GlobalHeaderMiniSubItem = styled.li`
    list-style: none;
`

const GlobalHeaderMiniLink = styled(Link).attrs((props: any) => ({
    href: props.url,
    'aria-label': 'styled components',
}))`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    min-height: 3rem;
    width: 100%;
    color: inherit;
`

const MiniLinkWrapper = styled.div`
    box-sizing: border-box;
    transition: all 300ms cubic-bezier(0.19,0,0.2,1) 0s;
    padding: 0rem;
    margin: 0rem 0rem 1.5rem;
`
const MiniLinkSecondaryWrapper = styled.div`
    box-sizing: border-box;
    transition: all 300ms cubic-bezier(0.19,0,0.2,1) 0s;
    padding: 0rem;
    margin: 0rem
`
const MiniLinkSpan = styled.span`
    color:${(props: any) => props.color};
    font-family: inherit;
    margin: 0rem;
    position: relative;
    transition: all 300ms cubic-bezier(0.19,0,0.2,1) 0s;
    font-weight: ${(props: any) => props.fontWeight};
    font-size: 1rem !important;
    line-height: 1.5rem;
`


const NavSidebarView = () => {
    const { closeLeftSidebar } = useUI()
    const [category, setCategory] = useState("none")
    const [arrival, setArrival] = useState("none")
    const [deals, setDeals] = useState("none")
    const history = useHistory()


    const handleClose = () => closeLeftSidebar()

    const handleClick = (url: string) => {
        closeLeftSidebar()
        history.push(url)
    }
    const handleArrival = () => {

        if (arrival === "none") {
            setArrival("block")
        } else {
            setArrival("none")
        }

    }
    const handleTopDeals = () => {

        if (deals === "none") {
            setDeals("block")
        } else {
            setDeals("none")
        }

    }
    const handleCategory = () => {

        if (category === "none") {
            setCategory("block")
        } else {
            setCategory("none")
        }

    }
    return (
        <Wrapper>

            <Header>
                <HeaderWrapper>
                    <SecondaryHeaderWrapper>
                        <CrossButton onClick={handleClose} aria-label="Close panel"><CloseIcon /></CrossButton>
                    </SecondaryHeaderWrapper>

                </HeaderWrapper>
            </Header>
            <CartWrapper>
                <GlobalHeaderMini>
                    <GlobalHeaderMiniList>
                        <GlobalHeaderMiniItem>
                            <GlobalHeaderMiniItemToggle onClick={handleCategory}>
                                <span>
                                    Categories
                                </span>
                                <ButtonSpan>
                                        <FoldIcon />
                                    </ButtonSpan>
                                <ButtonWrapper>
                                  
                                </ButtonWrapper>

                            </GlobalHeaderMiniItemToggle >
                            <GlobalHeaderMiniContent display={category}>
                                <GlobalHeaderMiniSubItem>
                                    <GlobalHeaderMiniLink >


                                        <MiniLinkWrapper onClick={() => handleClick("/products/category/electronics")}>

                                            <MiniLinkSpan color={"black"} fontWeight={"700"} >

                                                Electronics
                                            </MiniLinkSpan>
                                            <MiniLinkSecondaryWrapper >
                                                <MiniLinkSpan color={"rgb(76 78 82)"} fontWeight={"500"}>
                                                    The latest electronic gadget available phones, tvs, tablets, and more.
                                                </MiniLinkSpan>
                                            </MiniLinkSecondaryWrapper>

                                        </MiniLinkWrapper>

                                    </GlobalHeaderMiniLink>
                                </GlobalHeaderMiniSubItem>
                                <GlobalHeaderMiniSubItem>
                                    <GlobalHeaderMiniLink>

                                        <MiniLinkWrapper onClick={() => handleClick("/products/category/jewelery")}>
                                            <MiniLinkSpan color={"black"} fontWeight={"700"}>
                                                Jewelry
                                            </MiniLinkSpan>
                                            <MiniLinkSecondaryWrapper >
                                                <MiniLinkSpan color={"rgb(76 78 82)"} fontWeight={"500"}>
                                                    Quality and high-end jewelry for every occasion.
                                                </MiniLinkSpan>
                                            </MiniLinkSecondaryWrapper>

                                        </MiniLinkWrapper>
                                    </GlobalHeaderMiniLink>
                                </GlobalHeaderMiniSubItem>
                                <GlobalHeaderMiniSubItem>
                                    <GlobalHeaderMiniLink>

                                        <MiniLinkWrapper onClick={() => handleClick("/products/category/men's clothing")}>
                                            <MiniLinkSpan color={"black"} fontWeight={"700"}>
                                                Men's Clothing
                                            </MiniLinkSpan>
                                            <MiniLinkSecondaryWrapper >
                                                <MiniLinkSpan color={"rgb(76 78 82)"} fontWeight={"500"}>
                                                    Men's Clothing of all sizes available with top notch quality and style
                                                </MiniLinkSpan>
                                            </MiniLinkSecondaryWrapper>

                                        </MiniLinkWrapper>
                                    </GlobalHeaderMiniLink>
                                </GlobalHeaderMiniSubItem>
                                <GlobalHeaderMiniSubItem>
                                    <GlobalHeaderMiniLink>

                                        <MiniLinkWrapper onClick={() => handleClick("/products/category/women's clothing")}>
                                            <MiniLinkSpan color={"black"} fontWeight={"700"}>
                                                Women's Clothing
                                            </MiniLinkSpan>
                                            <MiniLinkSecondaryWrapper >
                                                <MiniLinkSpan color={"rgb(76 78 82)"} fontWeight={"500"}>
                                                    Men's Clothing of all sizes available with top notch quality and style
                                                </MiniLinkSpan>
                                            </MiniLinkSecondaryWrapper>

                                        </MiniLinkWrapper>
                                    </GlobalHeaderMiniLink>
                                </GlobalHeaderMiniSubItem>
                            </GlobalHeaderMiniContent>

                        </GlobalHeaderMiniItem>
                        <GlobalHeaderMiniItem>
                            <GlobalHeaderMiniItemToggle onClick={handleArrival}>
                                <span>
                                    New Arrivals
                                </span>

                                <ButtonWrapper >
                                    <ButtonSpan >
                                        <FoldIcon />
                                    </ButtonSpan>
                                </ButtonWrapper>

                            </GlobalHeaderMiniItemToggle>
                            <GlobalHeaderMiniContent display={arrival}>

                                <GlobalHeaderMiniSubItem>
                                    <GlobalHeaderMiniLink>
                                        <MiniLinkWrapper>
                                            <MiniLinkSpan>
                                                Men's Clothing
                                            </MiniLinkSpan>
                                        </MiniLinkWrapper>
                                    </GlobalHeaderMiniLink>
                                </GlobalHeaderMiniSubItem>
                            </GlobalHeaderMiniContent>

                        </GlobalHeaderMiniItem>

                        <GlobalHeaderMiniItem>
                            <GlobalHeaderMiniItemToggle onClick={handleTopDeals}>
                                <span>
                                    Top Deals
                                </span>
                                <ButtonWrapper>
                                    <ButtonSpan>
                                        <FoldIcon />
                                    </ButtonSpan>
                                </ButtonWrapper>
                            </GlobalHeaderMiniItemToggle>
                            <GlobalHeaderMiniContent display={deals}>
                                <GlobalHeaderMiniSubItem>
                                    <GlobalHeaderMiniLink>
                                        <MiniLinkWrapper>
                                            <MiniLinkSpan>
                                                Men's Clothing
                                            </MiniLinkSpan>
                                        </MiniLinkWrapper>
                                    </GlobalHeaderMiniLink>
                                </GlobalHeaderMiniSubItem>
                            </GlobalHeaderMiniContent>
                        </GlobalHeaderMiniItem>

                        <GlobalHeaderMiniItem>

                        </GlobalHeaderMiniItem>
                    </GlobalHeaderMiniList>
                </GlobalHeaderMini>
            </CartWrapper>
        </Wrapper>
    )
}

export default NavSidebarView
