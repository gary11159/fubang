import React, { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';

function Body() {
    const [device, setDevice] = React.useState("mobile");

    const handleRWD = () => {
        if (window.innerWidth > 768)
            setDevice("PC");
        else if (window.innerWidth > 576)
            setDevice("tablet");
        else
            setDevice("mobile");
    }
    React.useEffect(() => {
        window.addEventListener('resize', handleRWD);
        return (() => {
            window.removeEventListener('resize', handleRWD);
        })
    }, []);

    return (
        <>
            <div className="banner"></div>
            <div className="body">
                <Container className="box">
                    <Row>
                        {device === 'PC' ?
                            <Col md={3}>
                                <div className="icon"></div>
                                <p>多張保單地址/電話/Email變更</p>
                            </Col>
                            :
                            <>
                                <Col xs={5}>
                                    <div className="icon"></div>
                                </Col>
                                <Col xs={7} className="pText">
                                    多張保單地址/電話/Email變更操作說明
                                </Col>
                            </>
                        }
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default Body;