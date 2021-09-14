import React from 'react'
import styled, {css} from 'styled-components'
import { mobileMax } from '../utils/media'
import { useFetchProductsByCategoryQuery } from '../features/products/products-api-slice'
import Thumbnail from '../components/Thumbnail'
import Loading from '../components/Loading'
import Main from '../components/Main'
import Container from '../components/Container'






const Category = (props: any) => {

    const { category } = props.match.params
    const { data =[], error, isLoading } = useFetchProductsByCategoryQuery(category)
    
    if (isLoading) return <Loading />
    return (
        <Main>
            <Container>  
                {data.map(product => <Thumbnail key={product.id} product={product} />)}
            </Container>
        </Main>
    )
}


export default Category
