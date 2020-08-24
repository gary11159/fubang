import React, { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import Banner from '../public/images/banner.svg';
import Banner_mobile from '../public/images/banner_mobile.svg';

function Body(props) {
    const [device, setDevice] = React.useState("PC");
    const [_isMounted, set_isMounted] = React.useState(false);

    const handleRWD = () => {
        !_isMounted ? set_isMounted(true) : set_isMounted(false);
        if (window.innerWidth > 768) {
            setDevice("PC");
            props.setDevice("PC");
        }
        else if (window.innerWidth > 576) {
            setDevice("tablet");
            props.setDevice("tablet");
        }
        else {
            setDevice("mobile");
            props.setDevice("mobile");
        }
    }
    React.useEffect(() => {
        if (!_isMounted) {
            handleRWD();
        }
        window.addEventListener('resize', handleRWD);
        return (() => {
            window.removeEventListener('resize', handleRWD);
        })
    }, []);

    return (
        <>
            {device !== 'mobile' ?
                <div style={{position:'relative'}}>
                    <div className="picText">線上交易操作手冊</div>
                    <img src={Banner}></img>
                </div>
                : <img src={Banner_mobile}></img>
            }
            <div className="body">
                <Container className="box">
                    <Row>
                        {device !== 'mobile' ?
                            <Col md={3}>
                                <div className="icon"></div>
                                <p>多張保單地址/電話/Email變更</p>
                            </Col>
                            :
                            <Fragment>
                                <Col xs={5} style={{ paddingBottom: '12px' }}>
                                    <div className="icon"></div>
                                </Col>
                                <Col xs={7} className="pText" style={{ paddingBottom: '12px' }}>
                                    多張保單地址/電話/Email變更操作說明
                                </Col>
                                <Container />
                            </Fragment>
                        }
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default Body;