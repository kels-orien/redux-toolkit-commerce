import React, { useState } from 'react'
import { useFetchProductsQuery } from '../features/products/products-api-slice'
import styled, {css} from 'styled-components'
import Thumbnail from '../components/Thumbnail'
import Main from '../components/Main'
import Container from '../components/Container'
import Loading from '../components/Loading'
import rangeMap from '../utils/range-map'
import Skeleton from '../components/Skeleton'
import Wrapper from '../components/Wrapper'
import CardWrapper from '../components/CardWrapper'


function Home() {


  
  const { data = [], isFetching, isLoading } = useFetchProductsQuery();
  
  if (isLoading) return <Loading/>
  return (  
    <Main>
    <Container>
      {data.length > 0 ? (data.map((product) => (
        <Thumbnail key={product.id} product={product} />
      ))) : (<Wrapper>
                <CardWrapper>
                  {rangeMap(12, (i) => (
                     <Skeleton
                      key={i}
                      />
            ))}

        </CardWrapper>
      </Wrapper>)}
    </Container>
  </Main>
  )
}

export default Home
  
