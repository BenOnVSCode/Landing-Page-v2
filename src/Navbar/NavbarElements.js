import styled from 'styled-components' 


export const Nav = styled.nav`
    background:  ${({scrollNav}) => (scrollNav ? '#000' : 'transparent')} ;
    height: 150px;     
    display: flex ;
    justify-content: center;
    align-items: center ;
    font-size: 1rem ;
    position: sticky ;
    top: 0 ;
    z-index: 10;
    @media screen and (max-width: 960px ) {
        transition: 0.3 all ease ;
    }
`




export const NavbarContainer = styled.div`
    display: flex ; 
    justify-content: space-between ;
    height: 80px ;
    z-index: 1 ;
    width: 100% ;
    padding: 0 24px ;
    max-width: 1100px ;
`

export const NavLogo = styled.h1 `
    color: ${({light}) => (light ? '#343434' : '#fff' )}  ; 
    justify-self: flex-start ;
    cursor: pointer ;
    font-size: 1.5rem ;
    display: flex ;
    align-items: center ;
    margin-left : 24px ;
    letter-spacing: -0.1rem ;
    text-decoration: none ;

    @media screen and (max-width: 768px ) {
        position: absolute ;
        top: 1rem ;
        left: 0 ;
    }
`

export const MobileIcon = styled.div `
    display: none ;
    color: ${({light}) => (light ? '#343434' : '#fff' )}  ; 
    @media screen and (max-width: 768px) {
        display: block ; 
        position: absolute ;
        top: 0 ;
        right: 0 ;
        transform: translate(-100%, 60%) ;
        font-size: 1.8rem ;
        cursor: pointer ;
    }
`

export const NavMenu = styled.ul `
        display: flex ;
        align-items: center ;
        list-style: none ;
        text-align: center ;
        margin-right: -22px ; 
        @media screen and (max-width: 768px ) {
            display: none ;
        }
`

export const NavItem = styled.li`
        height: 80px ;
`

export const NavLinks = styled.a `
        color: ${({light}) => (light ? '#343434' : '#fff' )}  ; 
        display : flex ;
        align-items: center ; 
        text-decoration : none ;
        padding: 0 1rem ;
        height: 100% ;
        cursor : pointer ; 
        margin: 0 .5rem ;
        transition: all 0.3s ease-in-out ;
        &.active {
            border-bottom: 3px solid #01bf71 ;
        }
        &:hover {
            color: #59ead2 ;
        }
`

export const NavBtn = styled.nav `
        display: flex ; 
        align-items: center ;
        @media screen and (max-width: 768px) {
            display:none;
        }
`

export const NavBtnLink = styled.a `
        border-radius: 50px ;
        background: #01bf71 ;
        white-space: nowrap ;
        padding: 10px 22px ;
        color: #010606 ;
        font-size: 16px ; 
        outline : none ; 
        border: none ;
        cursor: pointer ;
        transition: all 0.3s ease-in-out ;
        text-decoration: none ;
        &:hover {
            transition: all 0.3s ease-in-out ;
            background: #fff  ;
            color: #010606 ;
        }
`

export const Span1 = styled.span ` 
    font-weight: bolder ;
    color: #59ead2 ;
`

export const Span2 = styled.span ` 
    font-weight: bolder ;


`