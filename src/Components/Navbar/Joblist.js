import React from 'react';

import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const Joblist = ({jobs}) => { 
    console.log(jobs)

    return jobs.map((job, index) => (
            <Row>
                <td>
                    {job.id}
                </td>
                <td>
                    {job.jobName}   
                </td>
                <td>
                    {job.companyName}   
                </td>
                <td>
                    {job.location}  
                </td>
                <td>
                    {job.jobType}   
                </td>
                <td>
                    {job.remote}    
                </td>
                <td>
                    {job.experience}    
                </td>
                <Button>Star Icon</Button>
            </Row>
    ))
}

export default Joblist;