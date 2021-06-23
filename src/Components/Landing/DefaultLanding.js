import React from 'react'

//Import components
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

function DefaultLanding() {
    return (
        <Container className="landingContainer" fluid>
            <Row lg={2} md={2} sm={2}>
                <Col sm={8}>
                    <Row>
                        <h2>Hello...</h2>
                        <h1>Welcome To Tracker</h1>
                    </Row>
                    <Row>
                        <p>Tracker was designed to help job seekers in job searching, job applications, and networking endeavors.</p>
                    </Row>
                    <Row>
                        <Button>
                            Learn More
                        </Button>
                    </Row>
                </Col>
                <Col sm={4}>
                    <h1>An image will go here</h1>
                </Col>
            </Row>
        </Container>
    )
}

export default DefaultLanding
