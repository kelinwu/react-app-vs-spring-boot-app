import styled, {keyframes} from 'styled-components'

export const Wrapper = styled.section`
    margin-top: 2rem;
    background-color: paleturquoise;
`

export const fadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`
export const outerWrapper = styled.div`
    width: 100% auto;
    background-color: ${props=>props.theme.colors.cust1};
    margin-top: 2rem;
`
export const innerWrapper = styled.div`
    padding: 50px;
    background-color: ${props=>props.theme.colors.cust2};
    margin-top: 2rem;
`


export const Link = styled.a`
    color: violet;
    font-size: 1.5rem;
`