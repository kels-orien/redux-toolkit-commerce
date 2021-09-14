import React from 'react'
import Loading from '../components/Loading'
import Main from '../components/Main'
import Container from '../components/Container'
import { useFetchProductsQuery } from '../features/products/products-api-slice'
import { filter } from '../utils/filter'
import Thumbnail from '../components/Thumbnail'


const Search = (props: any) => {

    const { q } = props.match.params



    const { data = [], isFetching, isLoading } = useFetchProductsQuery();

    if (isLoading) return <Loading />
    const filteredData = filter(data, q.toLowerCase())

    return (
        <Main>
            <Container>
                {filteredData.length > 0 ? (filteredData.map((product) => (
                    <Thumbnail key={product.id} product={product} />
                ))) : ("")}
            </Container>

        </Main>
    )
}

export default Search