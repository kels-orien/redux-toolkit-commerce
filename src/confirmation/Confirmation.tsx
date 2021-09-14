import React from 'react'
import styled, { css } from 'styled-components'
import { mobileMax } from '../utils/media'
import { lightOrangeSecondary } from '../utils/colors'
import { useAppDispatch } from '../app/hooks'
import { emptyCart } from '../features/cart/cart-slice'
import { useAppSelector } from '../app/hooks'
import { lightRed } from '../utils/colors'
import { emptyShippingDetails } from '../features/shipping/shipping-slice'
import { useHistory } from 'react-router-dom'

const Container = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: flex-end;
 
`

const Main = styled.main`
  margin: 0 auto;
  padding: 2rem;
  

    ${mobileMax(css`
      padding-top: 7.5rem;
  `)};
`


const TopWrapper = styled.div`
    padding-top: 4rem;
`

const OrderId = styled.h3`
    font-size: 1.2rem;
    margin-block-start: 0em;
    margin-block-end: 0em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
`

const OrderParagraph = styled.p`
    line-height: 2rem;
    font-size: 1.1rem;
    padding: 2rem;
    font-weight: 500;
`

const SectionWrapper = styled.div`
    max-width: 55rem;
    margin: 0 auto;
`
const DetailsWrapper = styled.div`
    background-color: ${lightOrangeSecondary};
    padding: 1.5rem 2rem;
    box-shadow: 0 1px 1px 0 #ccc;
    border-radius: 2px;
    margin-top: 0.5rem;
    display: flex;
    justify-content: space-between;
`

const DeliveryDetails = styled.div`
    display: flex;
`

const DeliveryAddress = styled.div`
    display: flex;
`
const DetailsText = styled.h3`
    margin-block-start: 0em;
    margin-block-end: 0em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding: .2rem
`

const HomeLinkWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 1rem;
`
const HomeLink = styled.a`
    cursor: pointer;
    padding: .2rem;
    text-decoration: underline;
    text-align: center;
    color:${lightRed};
`
const Confirmation = () => {
    const dispatch = useAppDispatch()
    const details = useAppSelector(state => state.shipping)
    const history = useHistory()
    dispatch(emptyCart())

    const handleClick = () => {
        dispatch(emptyShippingDetails())
        history.push("/")
    }
    return (
        <Main>
            <Container>
                <TopWrapper><OrderId>Order Confirmation</OrderId><OrderId>Order Id: 43232323244242</OrderId></TopWrapper>
                <OrderParagraph> Thank you for shopping with us. We'd like to let you know that
                    your order was received and is been prepared for shipment. your estimated delivery date is below.
                    if you would like to view the status of your order or make changes. please visit Your orders on our site.</OrderParagraph>
            </Container>
            <SectionWrapper>
                <DetailsWrapper>

                    <DeliveryDetails>
                        <div>
                            Your Estimated delivery date is: <br />
                            <DetailsText>Monday, Sep 15, 2021</DetailsText>
                        </div>
                    </DeliveryDetails>
                    <DeliveryAddress>
                      
                        <div>
                            Your Order will be sent to: <br />
                            <DetailsText>{details.shipping.fullName}</DetailsText> 
                            <DetailsText>{details.shipping.apt} {details.shipping.address} </DetailsText>
                            <DetailsText>{details.shipping.city }, {details.shipping.state}</DetailsText>
                            <DetailsText>{details.shipping.country }</DetailsText>
                            <DetailsText>{details.shipping.zip }</DetailsText>
                        </div>
                    </DeliveryAddress>
                </DetailsWrapper>
                <HomeLinkWrapper><HomeLink href='#' onClick= { () => handleClick()}>Continue Shopping</HomeLink></HomeLinkWrapper>
                
            </SectionWrapper>
        </Main>
    )
}

export default Confirmation
