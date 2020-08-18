import React, { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Banner from '../public/images/banner.svg';
import { Row, Col, Badge } from 'react-bootstrap';

function Body() {

    return (
        <>
            {/* <img src={Banner}></img> */}
            <div className="banner"></div>
            <div style={{ paddingTop: '10px' }}>
                <Container className="box">
                    <Row>
                        <Col md={3}>
                            <div className="icon"></div>
                            <p className="description">多張保單地址/電話/Email變更</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default Body;