import React, { Component } from 'react'

import {Form, Button, Row, Col} from 'react-bootstrap'

import "./input-form.styles.scss"

export class InputForm extends Component {
    state = {
        owner: '',
        repo: ''
    }

    handleOnChange = (event) => {
        const {name, value} = event.target;

        this.setState({[name]: value});
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        this.props.updateInputDetails(this.state)
    }

    render() {
        return (
            <div className="input-form">
                <Form onSubmit={this.handleFormSubmit}>
                    <Row>
                        <Col xs={12} sm={4}>
                            <Form.Group>
                                <Form.Label>Owner Name</Form.Label>
                                <Form.Control type="text" value={this.state.owner} placeholder="Owner name" name="owner" onChange={this.handleOnChange} />
                            </Form.Group>
                        </Col>
                        <Col xs={12} sm={4}>
                            <Form.Group>
                                <Form.Label>Repository Name</Form.Label>
                                <Form.Control type="text" value={this.state.repo} placeholder="Repository Name" name="repo" onChange={this.handleOnChange} />
                            </Form.Group>
                        </Col>
                        <Col xs={12} sm={4} className="d-flex justify-content-center align-items-center">
                        <Button variant="primary"  type="submit">Fetch Data</Button>
                        </Col>
                    </Row>                    
                </Form>
            </div>
        )
    }
}

export default InputForm
