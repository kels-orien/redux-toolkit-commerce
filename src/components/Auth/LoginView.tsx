import React, { FC, useEffect, useState } from 'react'
import styled from 'styled-components'
import Button from '../Button'
import { AccountIcon } from '../Icons'
interface Props { }


const Form = styled.form`
    display: flex;
    width: 20rem;
    flex-direction: column;
    justify-content: space-between;
    padding: 0.75rem;
`

const LogoWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding-bottom: 3rem;
`

const MsgWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const Input = styled.input`
    background-color: #fafafa;
    padding-top: .8rem;
    padding-bottom: .8rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    width: 100%;
    appearance: none;
    transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
    padding-right: 2.5rem;
    border: 1px solid #d9d9d9;
    border-color: #d9d9d9;
    color: #212121;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
`



const LoginView: FC<Props> = () => {



    return (
        <Form>
            <LogoWrapper><AccountIcon /></LogoWrapper>
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Password" />

            <Button type='submit'>Log In</Button>
        </Form>
    )
}

export default LoginView
