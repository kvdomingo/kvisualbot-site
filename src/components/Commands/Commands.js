import React from "react";
import {
    Card,
    CardHeader,
    CardBody,
    Row,
    Col,
    ListGroup,
    ListGroupItem,
} from 'reactstrap';
import PropTypes from 'prop-types';


function Commands({ header, commands }) {
    return (
        <Card className='my-3'>
            <CardHeader>{header} commands</CardHeader>
            <CardBody>
                <ListGroup>
                    {commands.data.map((command, i) => (
                        <ListGroupItem key={i}>
                            <Row key={i}>
                                <Col sm='4'>
                                    <code>
                                        !{command.command}
                                        {command.required.map((req, i) => (
                                            <React.Fragment key={i}>
                                                {` [${req}]`}
                                            </React.Fragment>
                                        ))}
                                        {command.optional.map((opt, i) => (
                                            <React.Fragment key={i}>
                                                {` (${opt})`}
                                            </React.Fragment>
                                        ))}
                                    </code>
                                </Col>
                                <Col sm='8'>
                                    {command.description}
                                </Col>
                            </Row>
                        </ListGroupItem>
                    ))}
                </ListGroup>
            </CardBody>
        </Card>
    );
}

Commands.propTypes = {
    header: PropTypes.string.isRequired,
    commands: PropTypes.shape({
        command: PropTypes.string.isRequired,
        required: PropTypes.arrayOf(PropTypes.string),
        optional: PropTypes.arrayOf(PropTypes.string),
        description: PropTypes.arrayOf(PropTypes.string.isRequired),
    }).isRequired,
}

export default Commands;