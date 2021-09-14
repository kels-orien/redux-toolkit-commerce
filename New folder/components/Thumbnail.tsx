import React, { FC} from 'react'
import styled from 'styled-components'
import { addToCart } from '../features/cart/cart-slice'
import { useAppDispatch } from '../app/hooks'
import { Link } from 'react-router-dom'
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
    height: auto; 
`

const Title = styled.p`
    color:rgb(33, 37, 41);

`
const Price = styled.p`
    font-weight: 500;
`



const Thumbnail: FC<Props> = ( { product }) => {
    const dispatch = useAppDispatch()
    


    const handleClick = (product: any) => {    
        const item = {...product, quantity: 1}
        dispatch(addToCart(item))
    }
  
    return (
        <Card>
         <Link to={`/product/${product.id}`}><ImageLink alt={product.title} href="/">
             <Image src = {product.image} alt={`Preview of ${product.title}`}  />
             <Title>textTruncate(product.title, 8) </Title>
             <Price>${product.price}</Price>
         </ImageLink></Link>
            <button onClick={() => handleClick(product)}>Add to Cart</button>
        </Card>
    )
}

export default Thumbnail
