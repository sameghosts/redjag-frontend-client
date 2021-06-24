import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Table from 'react-bootstrap/Table';
import Joblist from './Joblist';
import { NavItem } from 'react-bootstrap';

function JobTable({jobs}) {
    const [data, setData] = useState({ data:[]});

    useEffect(() => {
        const fetchJobList = async () => {
            const { data } = await axios('https://jsonplaceholder.typicode.com/todos/')

            setData({data:data})
            console.log(data)
        }
        fetchJobList()
    }, [setData])
    console.log(data.data)

    return (
        <Table>
            <tr>
                <th>
                    #
                </th>
                <th>
                    Title
                </th>
                <th>
                    Company
                </th>
                <th>
                    Location
                </th>
                <th>
                    Type
                </th>
                <th>
                    Remote
                </th>
                <th>
                    Experience Level
                </th>
                <th>
                    Save Job
                </th>
            </tr>
            <tbody>
                {
                    data.data.map((item) => (
                        <tr key={item.userId}>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.completed}</td>
                        </tr>
                    ))
                }

            </tbody>
        </Table>
    )
}

export default JobTable
