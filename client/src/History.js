
import React, { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table'
import Navbar from 'react-bootstrap/Navbar';
import { Container, Nav } from "react-bootstrap";
import axios from "./axios";

function History() {
    const [times, setTimes] = useState([]);

    //to get data to show time and action in history details.
    useEffect(() => {
      axios.get("/view/sync").then(respose =>{
        setTimes(respose.data);
      });
    }, []);
    return (
       
        <Container>
                <Navbar bg="light" >
                <Navbar.Brand href="/">Timer</Navbar.Brand>
               
            </Navbar>
            <div>
            <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                <th>Time</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
                { times.map((tym) => (
                    <tr>
                    <td>{tym.time}</td>
                    <td>{tym.action}</td>
                    </tr>
                ))}
               
              
            </tbody>
            </Table>
            </div>
        </Container>
    )
}

export default History
