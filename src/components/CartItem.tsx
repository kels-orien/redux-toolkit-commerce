import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { mobile } from '../utils/media'
import { useAppDispatch } from '../app/hooks'
import { removeFromCart,  updateQuantity } from '../features/cart/cart-slice'


const CartListItem = styled.li`
    padding-top: 2rem;
    padding-bottom: 2rem;
    display: flex;
    flex-direction: row;
`

const CartListItemWrapper = styled.div`
    width: 4rem;
    position: relative;
    overflow: hidden;
    height: 4rem;
`
const CartListItemWrapperTwo = styled.div`
    display: inline-block;
    max-width: 100%;
    overflow: hidden;
    position: relative;
    box-sizing: border-box;
    margin: 0px;
`

const CartListItemWrapperThree = styled.div`
    box-sizing: border-box;
    display: block;
    max-width: 100%;
`
const CartImage = styled.img`
    box-sizing: border-box;
    display: block;
    max-width: 100%;
`


const ItemNameWrapper = styled.div`
    display: flex;
    flex-direction: column; 
    flex: 1 1;
    margin-right: 1rem;
    margin-left: 1rem;
`

const ItemNameSpan = styled.span`
    line-height: 1.5rem;    
    font-size: 1.125rem;
    cursor: pointer;
`

const ItemNameButtonWrapper = styled.div`
    margin-top: .75rem;
    align-items: center;
    display: flex;
`

const QuantityInput = styled.input`
    appearance: textfield;
    border-color: rgb(233 236 239);
    border-radius: .25rem;
    border-width: 1px;
    font-size: .875rem;
    line-height: 1.25rem;
    margin-left: .5rem;
    margin-right: .5rem;
    text-align: center;
    --tw-text-opacity: 1;
    color: rgba(0,0,0,1);
    width: 2rem;
`


const CartPrice = styled.div`
    font-size: 1rem;
    line-height: 1.5rem;
    justify-content: space-between;
    flex-direction: column;
    display: flex;
    font-size: 1rem;
    line-height: 1.5rem;
    justify-content: space-between;
    flex-direction: column;
    display: flex;
`

const CartItem = ({ item , mode}: { item: any, mode: boolean }) => {
    const [quantity, setQuantity] = useState(item.quantity);
    const dispatch = useAppDispatch()


   
    

    const increaseQuantity = (n = 1, id: number) => {
        const val = Number(quantity) + n
    
        if (Number.isInteger(val) && val >= 1) {
            setQuantity(val)
            const payload = { id, value: val }
            dispatch(updateQuantity(payload))
        }
      }
   
    return (

        <CartListItem>
            <CartListItemWrapper>
                <CartListItemWrapperTwo>
                    <CartListItemWrapperThree>
                        <CartImage src={item.image} />
                    </CartListItemWrapperThree>
                </CartListItemWrapperTwo>
            </CartListItemWrapper>
            <ItemNameWrapper>
                <ItemNameSpan>
                    {item.title}
                </ItemNameSpan>

                
                <ItemNameButtonWrapper>
                    <button type="button" onClick={() => increaseQuantity(-1,item.id)}><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 12H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg></button>
                    <label><QuantityInput type="number" max="10" maxlength="2" min="0" onChange={e => setQuantity(e.target.value)} value={quantity} disabled /></label>
                    <button type="button" onClick={() => increaseQuantity(1, item.id)}><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 5V19" stroke="currentColor" stroke-width="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M5 12H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg></button>
                </ItemNameButtonWrapper>
                
                
            </ItemNameWrapper>
            <CartPrice>
                <span>${item.price}</span>
                {mode ? (<button onClick={() => dispatch(removeFromCart(item))}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 6H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10 11V17" stroke="currentColor" strokeWidth="1.5" stroke-linecap="round" strokeLinejoin="round"></path><path d="M14 11V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg></button>):(null)}
            </CartPrice>
        </CartListItem>
    )
}

export default CartItem
