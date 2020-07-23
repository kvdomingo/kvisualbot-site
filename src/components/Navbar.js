import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText,
    UncontrolledDropdown as Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';
import { Image } from 'cloudinary-react';


export default class Navigation extends React.Component {
    state = {
        isOpen: false,
    }

    toggleNavbar = () => {
        this.setState(prevState => ({ isOpen: !prevState.isOpen }));
    }

    render() {
        const menuItems = [
            "Convenience",
            "Query",
            "Twitter",
            "VLIVE",
        ];

        return (
            <div>
                <Navbar color='light' light expand='lg'>
                    <NavbarBrand href='/'>
                        <Image
                            cloudName='kdphotography-assets'
                            className='img-fluid'
                            publicId='kvisualbot/avatar'
                            secure
                            aspectRatio='1'
                            radius='max'
                            crop='fill'
                            gravity='face'
                            height={60}
                            />
                    </NavbarBrand>
                    <NavbarText className='mr-3'>
                        <NavLink href='/'>
                            KVISUALBOT
                        </NavLink>
                    </NavbarText>
                    <NavbarToggler onClick={this.toggleNavbar} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav navbar>
                            <Dropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Commands
                                </DropdownToggle>
                                <DropdownMenu right>
                                    {menuItems.map((item, i) => (
                                        <DropdownItem key={i}>
                                            <NavLink href={`#${item.toLowerCase()}`}>{item}</NavLink>
                                        </DropdownItem>
                                    ))}
                                </DropdownMenu>
                            </Dropdown>
                        </Nav>
                        <Nav className='ml-auto' navbar>
                            <NavItem className='mx-1'>
                                <a href='https://discord.gg/jQ5dpeN' className='btn btn-outline-primary'>
                                    Discord
                                </a>
                            </NavItem>
                            <NavItem className='mx-1'>
                                <a href='https://github.com/kvdomingo/discord-kbot' className='btn btn-outline-secondary'>
                                    GitHub
                                </a>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}
