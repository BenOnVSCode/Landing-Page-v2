import React from 'react'
import { CloseIcon, Icon, SidebarContainer, SidebarLink, SidebarMenu, SideBarRoute, SidebarWrapper, SideBtnWrap } from './SidebarElements'

const Sidebar = ({isOpen, toggle, light}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink light={light} isOpen={isOpen} onClick={toggle}>
                        works
                    </SidebarLink>
                    <SidebarLink  light={light} isOpen={isOpen} onClick={toggle}>
                        us
                    </SidebarLink>
                    <SidebarLink  light={light} isOpen={isOpen} onClick={toggle}>
                        focus
                    </SidebarLink>
                    <SidebarLink  light={light} isOpen={isOpen} onClick={toggle}>
                        news
                    </SidebarLink>
                    <SidebarLink  light={light} isOpen={isOpen} onClick={toggle}>
                        contact
                    </SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar