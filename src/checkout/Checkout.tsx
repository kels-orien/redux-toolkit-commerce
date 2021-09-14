import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { Main, Container } from '../components/Layout'
import { useAppSelector } from '../app/hooks'
import CartItem from '../components/CartItem'
import { useForm } from 'react-hook-form'
import { totalAmountInCart } from '../utils/format'
import { lightRed } from '../utils/colors'
import { TotalWrapper, TotalLi, TotalSecondaryWrapper, TotalUnderline, Total, CartSpan } from '../components/CartSidebarView'
import CheckoutForm from "../components/CheckoutForm"
import { lightOrangeSecondary } from '../utils/colors'
import { mobileMaxExtra } from '../utils/media'
import EmptyCart from '../assets/svg/emptycart.svg'
import Btn from '../components/Button'
import { Link } from 'react-router-dom'
import { useAppDispatch } from '../app/hooks'
import { addShippingDetails } from '../features/shipping/shipping-slice'

const PriceWrapper = styled.div`
    margin: 0 auto
`

const Wrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex: auto;
    max-width: 70rem;

    ${mobileMaxExtra(css`
        display: block;
        padding-top: 1.5rem;
        margin: 0 auto;
        max-width: 38rem;
        padding-left: .3rem;
        padding-right: .3rem;
`)};

`

const ItemsWrapper = styled.div`
    width: 50%;

    ${mobileMaxExtra(css`
        width: 90%;
        margin: 0 auto;
`)};
`
const UserInfoWrapper = styled.div`
    width: 45%;
   

    ${mobileMaxExtra(css`
        padding-right: 0rem;
        width: 100%;
    `)};
`

const AddressWrapper = styled.div`
    width: auto;

    
    ${mobileMaxExtra(css`
        width: 90%;
        margin: 0 auto;
`)};
`

const CreditCardWrapper = styled.div`
    width: auto;
`

const EmptyWrapper = styled.div`
    margin: 0 auto;
`

const FormWrapper = styled.div`
    width: 100%;

`
const InputWrapper = styled.div`
    width: 100%;
    padding-top: 1rem;
    padding-bottom: 1rem;
`

const Input = styled.input`
    resize: none;
    min-width: 0px;
    width: 100%;
    font-weight: normal;
    appearance: none;
    background: #f5f4f2;
    border: 1px solid #e5e3dd;
    box-shadow: none;
    box-sizing: border-box;
    color: #241e12;
    height: 2.5rem;
    outline: none;
    padding: 0.75rem 1rem;
    transition: all 300ms cubic-bezier(0.19, 1, 0.22, 1) 0s;
    border-radius: 4px;
    font-size: 1rem !important;
`
const Select = styled.select`
    resize: none;
    min-width: 0px;
    width: 100%;
    font-weight: normal;
    appearance: none;
    background: #f5f4f2;
    border: 1px solid #e5e3dd;
    box-shadow: none;
    box-sizing: border-box;
    color: #241e12;
    height: 2.5rem;
    outline: none;
    padding: 0.75rem 1rem;
    transition: all 300ms cubic-bezier(0.19, 1, 0.22, 1) 0s;
    border-radius: 4px;
    font-size: 1rem !important;
    `

const Button = styled.input`
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
    padding: 0.75rem 2rem;
    box-shadow: 0 0 transparent, 0 0 transparent, 0 1px 2px 0 rgba(0,0,0,0.05);
    text-align: center;
    color: rgb(241 243 245);
    text-transform: uppercase;
    transition-property: background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;
    transition-timing-function: cubic-bezier(.4,0,.2,1);
    transition-duration: .15s;
    margin-bottom: 2rem;
    width: 100%;

    &: hover {
            background-color: rgb(248 249 250);
            border-width: 1px;
            color: rgb(0 0 0);
            border: 1px solid rgb(0 0 0);
    }
    
`
const FlexWrapper = styled.div`
    display: flex;
 `
const WidthWrapper = styled.div`
    width: 220%;
    padding-right: 0.5rem;
`
const Header = styled.header`
    padding: 0.75rem 1rem;
    font-size: 1.2rem;
    font-weight: 600;
`

const TopHeader = styled.header`
    font-size: 1.1rem;
`

const DetailsWrapper = styled.section`
    width: auto;
    background-color: ${lightOrangeSecondary};
    padding: 0.5rem 1rem;
    box-shadow: 0 1px 1px 0 #ccc;
    border-radius: 2px;
    margin-top: 0.5rem;
`

const ShippingDetailsWrapper = styled.section`
    width: 100%;
    padding-bottom: 2rem;
    
`
const EditWrapper = styled.div`
    display: flex;
    justify-content:flex-end;
`



const EditLink = styled.a`
    color: #2c3e50;
    cursor: pointer;
`

const EmptyHeader = styled.h3`
    padding-left: 10rem;
    font-size: 1.5rem;
    color: #9e9e9e;
`

const EmptySecondaryWrapper = styled.div`
    padding-bottom: 2rem;
`

const ButtonWrapper = styled.div`
    width: 60%;
    margin: 0 auto;
`
const Checkout = () => {
    const items = useAppSelector((state) => state.cart);
    const dispatch = useAppDispatch();

    const { register, handleSubmit } = useForm()
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [apt, setApt] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zip, setZip] = useState("");
    const [phone, setPhone] = useState("");
    const [country, setCountry] = useState("");
    const [status, setStatus] = useState(false);
    const [mode, setMode] = useState(true);

    const onSubmit = (data: any) => {
    


        setFullname(data.fullname)
        setEmail(data.email)
        setAddress(data.address)
        setApt(data.apt)
        setCity(data.city)
        setState(data.state)
        setZip(data.zip)
        setPhone(data.phone)
        setCountry(data.country)
        
        dispatch(addShippingDetails(data))
        
        setMode(false)
        setStatus(true)

    }

    const onEdit = () => {
        setMode(true)
        setStatus(false)
    }


    return (
        <Main>
            <Container>
                <Wrapper>
                    <UserInfoWrapper>
                        {!mode && items.cart.length > 0 ? (<ShippingDetailsWrapper>


                            Address Details
                            <DetailsWrapper>
                                <EditWrapper>
                                    <EditLink href="#" onClick={() => onEdit()}>Edit</EditLink>
                                </EditWrapper>
                                <p>{fullname}</p>
                                <p>{email}</p>
                                <p>{address}</p>
                                <p>{apt}</p>
                                <p>{city}</p>
                                <p>{state}</p>
                                <p>{zip}</p>
                                <p>{phone}</p>
                                <p>{country}</p>
                            </DetailsWrapper>
                        </ShippingDetailsWrapper>) : (null)}

                        {status && items.cart.length > 0 ? (<CreditCardWrapper>
                            Your Card Details
                            <CheckoutForm />
                        </CreditCardWrapper>) : (null)}
                        {mode && items.cart.length > 0 ? (<AddressWrapper>
                            <TopHeader>Shipping Details</TopHeader>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <FormWrapper>
                                    <InputWrapper>
                                        <Input {...register("fullname")} type="text" autoComplete="off" placeholder="Full name" />
                                    </InputWrapper>
                                    <InputWrapper>
                                        <Input {...register("email")} autoComplete="off" type="text" placeholder="Email" />
                                    </InputWrapper>
                                    <FlexWrapper>
                                        <WidthWrapper>
                                            <InputWrapper>
                                                <Input {...register("address")} autoComplete="off" type="text" placeholder="Address" />
                                            </InputWrapper>
                                        </WidthWrapper>


                                        <InputWrapper>
                                            <Input {...register("apt")} autoComplete="off" type="text" placeholder="Apt/Suite" />
                                        </InputWrapper>
                                    </FlexWrapper>
                                    <InputWrapper>
                                        <Input {...register("city")} autoComplete="off" type="text" placeholder="City" />
                                    </InputWrapper>
                                    <FlexWrapper>
                                        <WidthWrapper>
                                            <InputWrapper>
                                                <Input {...register("state")} autoComplete="off" type="text" placeholder="State" />
                                            </InputWrapper>
                                        </WidthWrapper>
                                        <InputWrapper>
                                            <Input {...register("zip")} autoComplete="off" type="text" placeholder="Zip Code" />
                                        </InputWrapper>
                                    </FlexWrapper>
                                    <InputWrapper>
                                        <Select {...register("country")}>
                                            <option value="">Select...</option>
                                            <option value="Nigeria">Nigeria</option>
                                            <option value="United States">United States</option>
                                        </Select>
                                    </InputWrapper>

                                    <InputWrapper>
                                        <Input {...register("phonenumber")} autoComplete="off" type="text" placeholder="Phone number" />
                                    </InputWrapper>
                                </FormWrapper>
                                <Button type="submit" />
                            </form>
                        </AddressWrapper>) : (null)}


                    </UserInfoWrapper>

                    <ItemsWrapper>
                        {items.cart.length === 0 ? (null) : (<div>{items.cart.map((item: any) => (
                            <CartItem
                                key={item.id}
                                item={item}
                                mode={false}
                            />
                        ))}</div>)}
                        <TotalWrapper>
                            <p>


                            </p>


                            {items.cart.length > 0 ? (<TotalSecondaryWrapper>
                                <TotalUnderline>
                                    <TotalLi>
                                        <span>Subtotal</span>
                                    </TotalLi>
                                    <TotalLi>
                                        <span>Estimated Shipping</span>
                                        <CartSpan>FREE</CartSpan>
                                    </TotalLi>
                                </TotalUnderline>
                                <Total>
                                    <span>Total</span>
                                    <span> ${totalAmountInCart(items.cart)}</span>
                                </Total>
                            </TotalSecondaryWrapper>) : null}
                        </TotalWrapper>
                    </ItemsWrapper>


                </Wrapper>

            </Container>
            <Container>
                {items.cart.length === 0 ? (<EmptyWrapper><EmptySecondaryWrapper><img src={EmptyCart} className="App-logo" alt="logo" /><EmptyHeader>Your cart is empty</EmptyHeader><ButtonWrapper><Link to="/"><Btn>Continue Shopping</Btn></Link></ButtonWrapper></EmptySecondaryWrapper></EmptyWrapper>) : (null)}

            </Container>


        </Main>
    )
}

export default Checkout
