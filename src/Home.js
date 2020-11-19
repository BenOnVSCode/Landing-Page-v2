import React, { useState } from 'react'
import { Bar, Dark, H1, HomeContainer, HomeSection, LeftContent, Light, RightContent, Span, Spano, US } from './HomeStyle';
import Navbar from './Navbar'
import { Span2 } from './Navbar/NavbarElements';
import Sidebar from './Sidebar'

const Home = () => {

    //States,
    const [isOpen, setisOpen] = useState(false);
    const [light, setlight] = useState(true)




    //Functions,
    const toggle = () => {
        setisOpen(!isOpen)
    }

    const darkHandle = () => {
        setlight(false)
    }

    const lightHandle = () => {
        setlight(true)
    }

    const hover = (e) => {
        e.target.background = 'red' 
    }

    return (
        <HomeContainer onmouseover={hover} light={light}>
            <Sidebar light={light} isOpen={isOpen} toggle={toggle} />
            <Navbar light={light} toggle={toggle} />
            <HomeSection>
                <LeftContent>
                    <US light={light}>
                        us <Span>We’re a design studio with headquarters in Buenos Aires.</Span>
                    </US>
                    <H1>
                    We create <Spano 
                        light={light}
                    > innovative digital products and future-oriented brands.</Spano>
                    </H1>
                </LeftContent>
                <RightContent>
                    <Light onClick={lightHandle} light={light}>
                        Light
                    </Light>
                    <Bar light={light}>
                        |
                    </Bar>
                    <Dark onClick={darkHandle} light={light}>
                        Dark
                    </Dark>
                </RightContent>
            </HomeSection>
        </HomeContainer>
    )
}

export default Home