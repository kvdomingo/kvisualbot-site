import React from "react";
import {
    Card,
    CardHeader,
    CardBody,
} from 'reactstrap';


export default function Legend() {
    return (
        <Card className='my-3'>
            <CardHeader>
                <h1 className='display-5'>Commands</h1>
            </CardHeader>
            <CardBody>
                Listed here are the commands for <b>KVISUALBOT</b> that can be used within a server channel.
                All commands are prefixed by <code>!</code>.
                All arguments are case-insensitive except for admin commands.
                Admin commands can only be accessed by devs and admins.
            </CardBody>
        </Card>
    );
}