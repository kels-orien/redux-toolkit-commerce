import React, { FC} from 'react'
import styled, {css} from 'styled-components'
import { addToCart } from '../features/cart/cart-slice'
import { useAppDispatch } from '../app/hooks'
import { Link } from 'react-router-dom'
import { lightRed } from '../utils/colors'
import { textTruncate } from '../utils/format'


type productType = {
    id: number
    image: string
    title: string
    price: string
    description: string
    category: string
}


interface Props {
    children?: any
    product: productType
}
const Card = styled.div`
    margin: 1rem;
    flex-basis: 45%;
    max-width: 20rem;
    padding: 1.5rem;
    text-align: center;
    color: inherit;
    text-decoration: none;
    transition: color 0.15s ease, border-color 0.15s ease;
`

const ImageLink = styled.a`

`

const Image = styled.img`
    max-width: 50%;
    height: 200px; 

    
    
    
    
  
`

const Title = styled.p`
    color:rgb(33, 37, 41);
    text-overflow: ellipsis;

`

const SpanTitle = styled.span`
    font-size: .7rem;
    color: #D5D9D9;
    display: none;
    background-color: white;
`   
const Price = styled.p`
    font-weight: 500;
`

const PriceStrikeThrough = styled.span`
    text-decoration: line-through;
    font-weight: 500;
`
const Button = styled.button`
    border-radius: 8px;
    box-shadow: 0 2px 5px 0 rgb(213 217 217 / 50%);
    font-size: .7rem;
    transition: all .2s;
    padding: .5rem;
    border: #D5D9D9 1px solid;
    cursor: pointer;
    
  &:hover {
      background-color: ${lightRed};
      color: white;
  }
`



const Thumbnail: FC<Props> = ( { product }) => {
    const dispatch = useAppDispatch()
    


    const handleClick = (product: any) => {    
        const item = {...product, quantity: 1}
        dispatch(addToCart(item))
    }
  
    return (
        <Card>
         <Link to={`/product/${product.id}`}><ImageLink alt={product.title} href="#">
             <Image src = {product.image} alt={`Preview of ${product.title}`} title={product.title} />
             <Title> {textTruncate(product.title, 34, null)}</Title>
             <Price>${product.price}</Price>
         </ImageLink></Link>
            <Button  onClick={() => handleClick(product)}>Add to Cart</Button>
        </Card>
    )
}

export default Thumbnail
