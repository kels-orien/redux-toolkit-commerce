import React,{ 
    
 } from 'react'
import { useUI } from '../app/context'
import styled, { css } from 'styled-components'
import { CartIcon2, CloseIcon } from './Icons'
import { mobile } from '../utils/media'
import { lightRed } from '../utils/colors'
import { useAppSelector } from '../app/hooks'
import CartItem from './CartItem'
import { useHistory } from 'react-router-dom'
import { totalAmountInCart } from '../utils/format'

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
`

const Header = styled.header`
    display: flex;
    align-items: flex-start;
    padding-top: 2rem;
    padding-bottom: 1rem;
`

const HeaderWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
`

const SecondaryHeaderWrapper = styled.div`
    height: 1.75rem;
    display: flex;
    align-items: center;
`
const CrossButton = styled.button`
    transition-timing-function: cubic-bezier(.4,0,.2,1);
    transition-duration: .15s;
    border-color: none;
    transition-property: background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;
    box-sizing: border-box;
    border: 0 solid #e5e7eb;
    cursor: pointer;
`
export const TotalWrapper = styled.div`
    flex-shrink: 0;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 1.25rem;
    padding-bottom: 1.25rem;
    
`
export const Total = styled.div`
    display: flex;
    justify-content: space-between;
    border-top-width: 1px;
    border-color: light-grey;
    border-top: 1px solid rgb(222 226 230);
    font-weight: 700;
    margin-bottom: 2.5rem;
    padding-top: 1rem;
`

export const TotalSecondaryWrapper = styled.div`
    border-top: 1px solid rgb(222 226 230);
`

export const TotalUnderline = styled.ul`
    padding-top: 0.75rem;
`

export const TotalLi = styled.li`
    display: flex;
    justify-content: space-between;
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
`

const UserWrapper = styled.div`
    position: relative;
`

const UserNav = styled.nav`
    position: relative;
`

const UserNavList = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-items: end;
    height: 100%;
`

const UserNavItem = styled.li`
    transition-property: background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;
    transition-timing-function: cubic-bezier(.4,0,.2,1);
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-right: 1.5rem;
    outline: 2px solid transparent;
    outline-offset: 2px;
    position: relative;
    color: black
    transition-duration: .1s;
`


export const CartSpan = styled.span`
    font-weight: 700;
    letter-spacing: 0.25em;
`

export const Button = styled.a`
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
    padding: 1rem 2.5rem;
    box-shadow: 0 0 transparent, 0 0 transparent, 0 1px 2px 0 rgba(0,0,0,0.05);
    text-align: center;
    color: rgb(241 243 245);
    text-transform: uppercase;
    transition-property: background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;
    transition-timing-function: cubic-bezier(.4,0,.2,1);
    transition-duration: .15s;
    width: 100%;

    &: hover {
            background-color: rgb(248 249 250);
            border-width: 1px;
            color: rgb(0 0 0);
            border: 1px solid rgb(0 0 0);
    }

    
`

const CartEmpty = styled.div`
    flex: 1 1%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-left: 1rem;
    padding-right: 1rem;
`

const CartEmptySpan = styled.span`
    border-width: 1px;
    border-style: dashed;
    border-color: 1px solid rgb(222 226 230);
    border-radius: .9999px;
    align-center: center;
    justify-content: center;
    padding: 3rem;
    background-color: rgb(222 226 230);
    color: #262626;
`
const CartHeading = styled.h2`
    letter-spacing: .025em;
    color: #241e1e;
    font-weight: 700;
    border: 0 solid black;
    border-bottom: 1px solid rgb(222 226 230);
    padding-bottom: 1rem;
`

const CartEmptyHeader = styled.h2`
    padding-top: 1.5rem;
    font-size:  1.5rem;
    line-height: 2rem;
    font-bold: 700;
    letter-spacing: 0.025em;
    text-align: center;

`
const CartListWrapper = styled.div`
    flex: 1 1;


${mobile(css`
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    `)}
`
const CartList = styled.ul`
    padding-bottom: 1.5rem;
    border-top-width: 1px;
    border-color: rgb(222 226 230);


    ${mobile(css`
    padding-top: 0rem;
    padding-bottom: 0rem;
    `)};

    `
//let items = []
const CartSidebarView = () => {
    const { closeSidebar } = useUI()
    const items = useAppSelector((state) => state.cart);
    const  history = useHistory()

    const handleClose = () => closeSidebar()

    const handleClick = () => {
        closeSidebar()
        history.push("/products/checkout")
    }
    
    
    
    return (
        <Wrapper>
            <Header>
                <HeaderWrapper>
                    <SecondaryHeaderWrapper>
                        <CrossButton onClick={handleClose} aria-label="Close panel"><CloseIcon /></CrossButton>
                    </SecondaryHeaderWrapper>
                    {items.cart.length === 0 ? (<CartEmpty><CartEmptySpan><CartEmptyHeader>Your Cart is Empty</CartEmptyHeader></CartEmptySpan></CartEmpty>) : (<CartListWrapper><CartHeading>My Cart</CartHeading><CartList>{items.cart.map((item: any) => (
                        <CartItem
                            key={item.id}
                            item={item}
                            mode ={true}
                        />
                    ))}</CartList></CartListWrapper>)}
                    <UserWrapper>
                        <UserNav>
                            <UserNavList>
                                <UserNavItem onClick={closeSidebar}>
                                    <CartIcon2 />
                                </UserNavItem>
                            </UserNavList>
                        </UserNav>
                    </UserWrapper>
                </HeaderWrapper>
            </Header>



            {!items.cart.length ? (null) : (<TotalWrapper>
                <TotalSecondaryWrapper>
                    <TotalUnderline>
                        <TotalLi>
                            <span>Subtotal</span>
                        </TotalLi>
                        <TotalLi>
                            <span>Taxes</span>
                            <span>Calculated at checkout</span>
                        </TotalLi>
                        <TotalLi>
                            <span>Estimated Shipping</span>
                            <CartSpan>FREE</CartSpan>
                        </TotalLi>
                    </TotalUnderline>
                    <Total>
                        <span>Total</span>
                        <span>${totalAmountInCart(items.cart)}</span>
                    </Total>
                </TotalSecondaryWrapper>
                <Button href='#' onClick = {()=>handleClick()}>
                    Proceed to Checkout
                </Button>
            </TotalWrapper>
)}


            

        </Wrapper>
    )
}

export default CartSidebarView
