import React from 'react'

//import dummy data
import jobs from './dummyData';
//import components
import Joblist from './Joblist';
import Table from 'react-bootstrap/Table';


export default function NavbarPortal() {
    return (
        <div>
           <Table striped={true} bordered={true} hover={true}>
               <thead>
                   <th>#</th>
                   <th>Job Title</th>
                   <th>Company</th>
                   <th>Location</th>
                   <th>Type</th>
                   <th>Remote</th>
                   <th>Experience Level</th>
                   <th>Save</th>
               </thead>
               <tbody>
                   <tr>
                        <Joblist jobs={jobs} />   
                   </tr>
               </tbody>
            </Table> 

        </div>
    )
}
