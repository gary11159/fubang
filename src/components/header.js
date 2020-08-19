import React, { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import $ from 'jquery';

function Header() {
    React.useEffect(() => {
        window.addEventListener('scroll', function () {
            let scrollPosition = window.pageYOffset;
            if (scrollPosition > 100) {
                $('#header').addClass('fixed');
            } else {
                $('#header').removeClass('fixed');
            }
        });
    });
    return (
        <Fragment>
            <div className="header-border"></div>
            <Container id="header" className="header">
                <Container>
                    <div className="header-logo"></div>
                </Container>
            </Container>
        </Fragment>
    );
}

export default Header;