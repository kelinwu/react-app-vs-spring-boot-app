import React from 'react'
import styled, { css, keyframes } from 'styled-components'
import { fadeIn } from "./index";

const StyledButton = styled.button`
    background-color: white;
    color: ${props => props.theme.colors.main};
    font-size: ${props => props.theme.fontSize.p};;
    margin: 1rem;
    padding: 9.5 rem 1rem;
    border: 1px solid palevioletred;
    border-radius: 5px;
    animation: 2s ${fadeIn} ease-in;

    ${({ primary }) => primary && css`
        background-color: palevioletred;
        color: white;
        box-shadow: 0 .5rem 1.5rem rbga(0,0,0,0.2)
    `}
`

const SuperButton = styled(StyledButton)`
    font-size: 2.5rem
`

const Button = ({ primary, children }) => {
    return (
        <>
            <StyledButton primary={primary}>{children}</StyledButton>
            <SuperButton>{children}</SuperButton>
        </>
    )
}

export default Button;