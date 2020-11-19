import React, { useEffect, useState } from 'react'
import { MobileIcon, Nav, NavbarContainer, NavBtn, NavBtnLink, NavItem, NavLinks, NavLogo, NavMenu, Span1, Span2 } from './NavbarElements'
import {FaBars } from 'react-icons/fa'


const Navbar = ({light, toggle}) => {


    return (
        <>
            <Nav >
                <NavbarContainer>
                    <NavLogo light={light} > estudio <Span1>/</Span1> <Span2>nk</Span2> </NavLogo>
                    <MobileIcon onClick={toggle} light={light} >
                        <FaBars  light={light}  />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks light={light}  >works</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks light={light}  >us</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks light={light}  >focus</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks light={light}  >news</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks light={light}  >contact</NavLinks>
                        </NavItem>

                    </NavMenu>
                    
                </NavbarContainer>
            </Nav>

        </>
    )
}

export default Navbar