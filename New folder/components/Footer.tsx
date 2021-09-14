import React from 'react'
import styled, { css } from 'styled-components'
import { lightGrey, lightGreySecondary } from '../utils/colors'
import { phone } from '../utils/media'
import { Link } from 'react-router-dom'


const Wrapper = styled.footer`
    width: 100%;
`

const SecondaryWrapper = styled.div`
    overflow: auto;
    text-align: center;
    background: ${lightGrey};
    border-bottom: 1px solid #eaeaea;
    border-top: 1px solid #eaeaea;
`

const TertiaryWrapper = styled.div`
    max-width: 500px;
    padding: 40px 20px;
    overflow: auto;
    margin: 0 auto;
    display: flex;

    ${phone(css`
    display: block;
  `)};
`
const InfoWrapper = styled.div`
    width: 33.3%;


    ${phone(css`
    width: 100%;
  `)};
`


const InfoHeader = styled.div`
    margin-bottom: .1rem;
`
const InfoSecondaryWrapper = styled.div`
    font-weight: 700;
    font-size: 1rem;
    margin-bottom: 10px;
`
const InfoItems = styled.div`
    font-weight: 400;
    color: ${lightGreySecondary};
`

const SmallPrint = styled.div`
    background: #efefef;
    padding: 20px;
    text-align: center;
    color: #262626;
    font-size: 11px;
`

const SmallWrapper = styled.div`
    max-width: 1920px;
    margin: 0 auto;
    padding: 0 50px;
    ${phone(css`
    padding: 0 20px;
  `)};
`
const SmallText = styled.div`
    opacity: 0.7;
`


const Footer = () => {
    return (
        <Wrapper>
            <SecondaryWrapper>
                <TertiaryWrapper>

                    <InfoWrapper>
                        <InfoSecondaryWrapper>
                            <InfoHeader>
                                USEFUL LINKS
                            </InfoHeader>
                            <InfoItems>
                                <ul>
                                    <Link to={`/products/category/electronics`}><li>Electronics</li></Link>
                                    <Link to={`/products/category/jewelery`}><li>Jewelry</li></Link>
                                    <Link to={`/products/category/men's clothing`}><li>Men's Clothing</li></Link>
                                    <Link to={`/products/category/women's clothing`}><li>Women's Clothing</li></Link>
                                </ul>
                            </InfoItems>

                        </InfoSecondaryWrapper>

                    </InfoWrapper>
                    <InfoWrapper>
                        <InfoSecondaryWrapper>
                            <InfoHeader>HELP</InfoHeader>
                            <InfoItems>
                                <ul>
                                    <li><a href="/">FAQ</a></li>
                                    <li><a href="/">Shipping</a></li>
                                    <li><a href="/">Payment</a></li>
                                    <li><a href="/">Returns</a></li>
                                    <li><a href="/">Contact Us</a></li>
                                </ul>
                            </InfoItems>

                        </InfoSecondaryWrapper>
                    </InfoWrapper>
                    <InfoWrapper>
                        <InfoSecondaryWrapper>
                            <InfoHeader>SOCIAL MEDIA</InfoHeader>
                            <InfoItems>
                                <ul>
                                    <li><a href="/">Facebook</a></li>
                                    <li><a href="/">Instagram</a></li>
                                    <li><a href="/">Twitter</a></li>
                                </ul>
                            </InfoItems>

                        </InfoSecondaryWrapper>

                    </InfoWrapper>
                </TertiaryWrapper>
            </SecondaryWrapper>
            <SmallPrint><SmallText>© 2021 Korien. All Rights Reserved. |<a href="/"><b>Term of use</b></a> | <a href="/"><b>Privacy Policy</b></a></SmallText></SmallPrint>
        </Wrapper>
    )
}

export default Footer
