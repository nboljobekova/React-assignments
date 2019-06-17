import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';


const Sidebar = props => {
    return (
        <div className="col-4">
            <Form className="mt-1">
                <FormGroup>
                    <Label for="exampleSelect">Select</Label>
                    <Input type="select" name="select" id="exampleSelect">
                        {/* <option>{props.state.country}</option> */}
                    </Input>
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" />{' '}
                        {/* {props.state.proxy_type} */}
                    </Label>
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" />{' '}
                        {/* {props.state.alive} */}
                    </Label>
                </FormGroup>
            </Form>
        </div>
    );
}

export default Sidebar