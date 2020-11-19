import styled from 'styled-components'


export const HomeContainer = styled.div ` 
    background: ${({light}) => (light ? '#fff' : "#343434")};
    transition: all 0.5s ease ;

`

export const HomeSection = styled.div ` 
    display: flex ;
    justify-content: center ;
    align-items: center ;
    height: calc(100vh - 150px ) ;
    

`

export const LeftContent = styled.div ` 
    display: flex ;
    flex-direction: column ;
    margin-left: 2rem ;
    margin-bottom: 6rem ;
`

export const US = styled.h1 ` 
    color: ${({light}) => (light ? "#343434" : '#fff')};
    font-weight: bolder ;

`

export const Span = styled.span ` 
    font-weight: 500 ;
    color: #a5a5a5 ;
    font-size: 18px ;

`

export const H1 = styled.h1 ` 
    font-weight: bolder ;
    color: #59ead2 ;
    width: 50vw ;
    font-size: clamp(1rem, 5vw, 4rem );
    

    &::selection {
        color: #ffff ;
    }
`

export const Spano = styled.span ` 
    color:  ${({light}) => (light ? "#343434" : '#fff')} ;

`

export const RightContent = styled.div ` 
    display: flex ;
    justify-self: flex-end ;
    align-items: flex-end ;
    flex-direction: column;
    justify-content: center ;
    align-items: center ;
    width: 30vw;
`
export const Light = styled.p ` 
    transform: rotate(-90deg);
    margin: 1rem ;
    cursor: pointer ;
    color: ${({light}) => (light ? "#343434" : '#fff')} ;
`
export const Bar = styled.h1 ` 
    color: ${({light}) => (light ? "#343434" : '#fff')} ;
`

export const Dark = styled.p ` 
    transform: rotate(-90deg);
    margin: 1rem ;
    cursor: pointer ;
    color: ${({light}) => (light ? "#343434" : '#fff')} ;
`