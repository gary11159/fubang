import React, { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Logo from '../public/images/fb_logo.svg';
import Navbar from 'react-bootstrap/Navbar';

function Header() {

    return (
        <Fragment>
            <div className="header-border"></div>
            <Container className="header">
                <div className="header-logo"></div>
            </Container>
        </Fragment>
    );
}

export default Header;