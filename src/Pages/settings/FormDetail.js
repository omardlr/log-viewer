import React from 'react';
import { Form,Col } from 'react-bootstrap';

const FormDetail = () => {
    return (
        <Form>
        <Form.Row>
            <Form.Group as={Col} controlId="">
                <Form.Label>LLave</Form.Label>
                <Form.Control type="text" />
            </Form.Group>
            <Form.Group as={Col} controlId="">
                <Form.Label>Valor</Form.Label>
                <Form.Control type="text" />
            </Form.Group>
            <Form.Group as={Col} controlId="">
                <Form.Label>Codigo Referencia</Form.Label>
                <Form.Control type="text" />
            </Form.Group>
        </Form.Row>
    </Form>
    );
}

export default FormDetail;
