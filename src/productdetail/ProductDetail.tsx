import React from 'react'
import styled, { css } from 'styled-components'
import { Button } from "../components/CartSidebarView"
import { mobileMaxExtra } from '../utils/media'
import { useFetchProductByIdQuery } from '../features/products/products-api-slice'
import Loading from '../components/Loading'
import { addToCart } from '../features/cart/cart-slice'
import { useAppDispatch } from '../app/hooks'
import { useUI } from '../app/context'


const Wrapper = styled.main`
    padding-top: 4rem;
    width: 100%;
   
`

const SecondaryWrapper = styled.div`
    display: block;
    margin: 0 auto;
    width: 100%;
    max-width: 1024px;

`


const BreadcrumbsWrapper = styled.div`
    cursor: pointer;
    text-transform: capitalize;

    ${mobileMaxExtra(css`
    margin-top: 4rem;
    padding-left: 2rem;
        `)};
    
`

const ImgWrapper = styled.div`
    display: block;
    margin: 0 auto;
`
const ImgSecondaryWrapper = styled.div`
    display: flex;
    justify-content: center;
`
const ImgTertiaryWrapper = styled.div`
    display: inherit;
    justify-content: center;
`
const Image = styled.img`
    width: 50%;
    height: auto;

    ${mobileMaxExtra(css`
     padding-top: 2rem
`)};
`
const ItemWrapper = styled.main`
        display: flex;
        flex-direction: row;
        margin-top: 2rem;
        margin-bottom: 2rem;

        ${mobileMaxExtra(css`
            display: block;
            margin: 0 auto;
        `)};
`

const ItemNameWrapper = styled.h2`
    font-size: 1.2rem;
    font-weight: 500;
`
const DetailsHeader = styled.header`

`

const DetailsHeaderWrapper = styled.div`


    ${mobileMaxExtra(css`
        padding-top: 1.4rem;
    `)};


`
const DetailsWrapper = styled.div`
    margin: 0 auto;
    line-height: 1.5;
    padding: 0.5rem;
    width: 75%;
    
    ${mobileMaxExtra(css`
        width: 100%;
        display: block;
`)};
`


const SizeWrapper = styled.div`
    padding: 1rem;
    display: flex;
    justify-content: center;
`

const SizeSecondaryWrapper = styled.div`
    padding-top: 1rem;
    padding-bottom: 1rem;
`

const SizeButton = styled.button`
    background-color: rgb(255 255 255);
    --tw-border-opacity: 1;
    border: 1px solid rgba(251,151,124, 0.7);
    border-radius: 9999px;
    border-width: 1px;
    box-sizing: border-box;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 3rem;
    margin-right: .75rem;
    padding: 0;
    --tw-shadow: 0 0 transparent;
    box-shadow: var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow);
    color: var(--text-primary);
    width:   3rem;
    transition-property: background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;
    transition-timing-function: cubic-bezier(.4,0,.2,1);
    transition-duration: .15s;


    &: hover {

        background-color: rgba(0,0,0,0.075);
    --tw-translate-x: 0;
    --tw-translate-y: 0;
    --tw-rotate: 0;
    --tw-skew-x: 0;
    --tw-skew-y: 0;
    --tw-scale-x: 1;
    --tw-scale-y: 1;
    transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    --tw-scale-x: 1.1;
    --tw-scale-y: 1.1;
    }

    & :focus {
        outline: 2px solid black;
        outline-offset: 2px;
        --tw-shadow: 0 0 0 2px var(--accents-2);
        box-shadow: var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow);

`
const ButtonWrapper = styled.div`
    width: 75%;
    margin: 0 auto;

${mobileMaxExtra(css`
    display: flex;
    justify-content: center;
    width: 100%;
`)};

`

const ButtonSecondaryWrapper = styled.div`
    

    ${mobileMaxExtra(css`
    display: flex;
    justify-content: center;
    width: 75%;
`)};
`

const DescriptionWrapper = styled.div`
    display: block;
`

const Description = styled.p`

`
const PriceWrapper = styled.div`
    padding-top: .2rem
`

const Price = styled.h3`
    font-size: 1.1rem;
    font-weight 700;
`
const DetailsSecondaryWrapper = styled.div`
    display: block;
`
const DetailsTertiaryWrapper = styled.div`
    display: block;

    ${mobileMaxExtra(css`
        display: flex;
        justify-content: space-between;
        padding-left: 1rem;
        padding-right: 1rem;
        `)};
`

const ProductDetail = (props) => {
    const { id } = props.match.params;
    const { openSidebar } = useUI()
    const { data , isLoading } = useFetchProductByIdQuery(id)
    const dispatch = useAppDispatch()
    if (isLoading) return <Loading />

    const handleClick = (product: any) => {

        const item = { ...product, quantity: 1 }
        dispatch(addToCart(item))
        openSidebar()
    }
    return (
        <Wrapper>
            
            <SecondaryWrapper>
                

                
                <BreadcrumbsWrapper> Home {'>'} {data.category} {'>'} {data.title}  </BreadcrumbsWrapper>
                <ItemWrapper>
                    <ImgWrapper>
                        <ImgSecondaryWrapper>
                            <ImgTertiaryWrapper>
                                <Image src={data.image} />
                            </ImgTertiaryWrapper>

                        </ImgSecondaryWrapper>

                    </ImgWrapper>

                    <DetailsWrapper>
                        <DetailsSecondaryWrapper>
                            <DetailsTertiaryWrapper>
                            <DetailsHeaderWrapper>
                                <DetailsHeader><ItemNameWrapper>{data.title}</ItemNameWrapper></DetailsHeader>
                            </DetailsHeaderWrapper>

                            <PriceWrapper><Price>${data.price}</Price></PriceWrapper>
                            </DetailsTertiaryWrapper>
                            <DescriptionWrapper>
                                
                                <Description>
                                    {data.description}
                                </Description>

                            </DescriptionWrapper>
                            
                            <SizeWrapper>
                                <SizeSecondaryWrapper>
                                    <SizeButton data-variant="flat" aria-label="Variant Swatch">XS</SizeButton>
                                    <SizeButton data-variant="flat" aria-label="Variant Swatch">S</SizeButton>
                                    <SizeButton data-variant="flat" aria-label="Variant Swatch">M</SizeButton>
                                    <SizeButton data-variant="flat" aria-label="Variant Swatch">L</SizeButton>
                                    <SizeButton data-variant="flat" aria-label="Variant Swatch">XL</SizeButton>
                                </SizeSecondaryWrapper>
                            </SizeWrapper>
                            <ButtonWrapper>
                                <ButtonSecondaryWrapper> <Button onClick={() => handleClick(data)}>
                                    Add to Cart
                                </Button></ButtonSecondaryWrapper>
                               
                            </ButtonWrapper>
                        </DetailsSecondaryWrapper>

                    </DetailsWrapper>

                </ItemWrapper>
            </SecondaryWrapper>
        </Wrapper>
    )
}

export default ProductDetail
