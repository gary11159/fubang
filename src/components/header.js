import React, { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Logo from '../public/images/fb_logo.svg';

function Header() {

    return (
        <Fragment>
            <div className="header-border"></div>
            <Container style={{padding: '21px 0 19px 0'}}>
                <div className="header-logo"></div>
            </Container>
        </Fragment>
    );
}

export default Header;