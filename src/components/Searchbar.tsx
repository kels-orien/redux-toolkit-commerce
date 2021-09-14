import React, { FC, useMemo} from 'react'
import useState from 'react-usestateref'
import styled from 'styled-components'
import { SearchIcon2 } from '../components/Icons'
import { useHistory } from 'react-router-dom'
interface Props {
    id?: string
  }


const Wrapper = styled.div`
    display: flex;
`
const SecondaryWrapper =styled.div`
  box-sizing: border-box;
  flex-grow:2;
  transition all 300ms cubic-bezier(0.19, 1, 0.22, 1);
  padding: .5rem;
  margin: 0rem;
`
const FormWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
  `

const FormSecondaryWrapper = styled.div`
  background-color: rgb(250,232,227);
  border-radius: 15px;
  cursor: default;
  padding: 0.25rem 0.75rem;
  position: absolute;
  right: 0px;
  width: auto;
  z-index: 1000;

  &:focus-within {
      background-color: white;
  }

`

const FormTertiaryWrapper = styled.div`
    align-self: center;
    box-sizing: border-box;
    position: relative;
    transition: all 300ms cubic-bezier(0.19, 1, 0.22, 1) 0s;
    padding: 0rem;
    margin: 0rem;
`

const SvgWrapper = styled.div`
    appearance: none;
    background-color: transparent;
    border: none;
    margin-bottom: 0px;
    padding: 0px;
    cursor: pointer;
`

const SvgPrimaryWrapper = styled.div`
        -webkit-box-align: center;
    align-items: center;
    box-sizing: border-box;
    display: flex;
    transition: all 300ms cubic-bezier(0.19, 1, 0.22, 1) 0s;
    padding: 0rem;
    margin: 0rem;
`


const SvgSecondaryWrapper = styled.div`
    align-self: center;
    -webkit-box-align: center;
    align-items: center;
    display: inline-flex;
    filter: none;
    cursor: pointer;
    vertical-align: unset;
    height: unset;
    width: unset;
`

const SpanWrapper =  styled.span`
    height: 1rem;
    width: 1rem;
`



const Input = styled.input`
    background-color: rgb(250,232,227);
    border: 0px;
    font-weight: 500;
    line-height: 1rem;
    padding-left: 0.75rem;
    text-overflow: ellipsis;
    transition: all 300ms cubic-bezier(0.19, 1, 0.22, 1) 0s;
    width: 13rem;
    z-index: 900;
    font-size: 0.875rem !important;
    color: rgb(68 68 68);

    &:focus-within {
        background-color: white;
    }
`
const Searchbar: FC <Props> = () => {

    const history = useHistory()

    const [value, setValue, ref] = useState('')
   
    const handleSearch = () => {
        let q = ref.current
        history.push(`/${q}`)
    }
    

    return useMemo (
        () =>(
        <Wrapper>
            <SecondaryWrapper>
                <FormWrapper>
                    <FormSecondaryWrapper>
                        <FormTertiaryWrapper>
                            <SvgWrapper>
                                <SvgPrimaryWrapper>
                                    <SvgSecondaryWrapper>
                                        <SpanWrapper onClick={() => handleSearch()}>
                                            <SearchIcon2/>
                                        </SpanWrapper>
                                    </SvgSecondaryWrapper>
                                    <Input type="search" aria-label="Search" autocomplete="off" name="search" placeholder="Find an Item"
                                   
                                    onChange = {(e: any) =>{  setValue(e.target.value)}}
                                    onKeyUp={(e: any) => {
                                        e.preventDefault()
                            
                                        if (e.key === 'Enter') {
                                          const q = e.currentTarget.value

                                          history.push(`/${q}`)
                                             
                                        }
                                      }}
                                    />
                                </SvgPrimaryWrapper>
                            </SvgWrapper>
                        </FormTertiaryWrapper>
                    </FormSecondaryWrapper>
                </FormWrapper>
            </SecondaryWrapper>
            
        </Wrapper>
    ),
    []
    )
}

export default Searchbar
