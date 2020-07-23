import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';


export default class Navigation extends React.Component {
    state = {
        isOpen: false,
    }

    toggleNavbar = () => {
        this.setState(prevState => ({ isOpen: !prevState.isOpen }));
    }

    render() {
        return (
            <div>
                <Navbar color='light' light expand='lg'>
                    <NavbarBrand href='/'>KVISUALBOT</NavbarBrand>
                    <NavbarToggler onClick={this.toggleNavbar} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className='ml-auto' navbar>
                            <NavItem>
                                <NavLink href='/'>Commands</NavLink>
                            </NavItem>
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
