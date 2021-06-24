import React from 'react';

import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const Joblist = ({jobs}) => { 
    console.log(jobs)

    return jobs.map((job, index) => (
        <Container>
            <Row>
                <Col>
                    {job.id}
                </Col>
                <Col>
                    {job.jobName}   
                </Col>
                <Col>
                    {job.companyName}   
                </Col>
                <Col>
                    {job.location}  
                </Col>
                <Col>
                    {job.jobType}   
                </Col>
                <Col>
                    {job.remote}    
                </Col>
                <Col>
                    {job.experience}    
                </Col>

            </Row>
            
        </Container>
    ))
}

export default Joblist;