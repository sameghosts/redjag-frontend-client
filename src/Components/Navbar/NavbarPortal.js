import React from 'react'

//import dummy data
import jobs from './dummyData';
//import components
import Joblist from './Joblist';
import JobTable from './JobTable';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';


export default function NavbarPortal() {
    return (
        <div>

          <JobTable jobs={jobs} /> 


        </div>
    )
}
