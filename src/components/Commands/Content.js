import React from "react";
import { Container } from 'reactstrap';
import Legend from './Legend';
import Header from "./Header";
import Commands from "./Commands";
import admin from './Admin.json';
import convenience from './Convenience.json';
import query from './Query.json';
import twitter from './Twitter.json';
import vlive from './Vlive.json';


const commands = [
    { header: "Admin", commands: admin },
    { header: "Convenience", commands: convenience },
    { header: "Query", commands: query },
    { header: "Twitter", commands: twitter },
    { header: "VLIVE", commands: vlive },
];

export default function Content() {
    return (
        <Container className='my-5'>
            <Header />
            <Legend />
            {commands.map((command, i) => (
                <Commands {...command} key={i} />
            ))}
        </Container>
    );
}