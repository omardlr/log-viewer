import React from 'react';
import { Form,Col } from 'react-bootstrap';

const FormSetting = () => {
	return (
		<Form>
			<Form.Row>
				<Form.Group as={Col} controlId="">
					<Form.Label>Sistema</Form.Label>
					<Form.Control type="text" />
				</Form.Group>
				<Form.Group as={Col} controlId="">
					<Form.Label>Modulo</Form.Label>
					<Form.Control type="text" />
				</Form.Group>
                <Form.Group as={Col} controlId="">
					<Form.Label>Sección</Form.Label>
					<Form.Control type="text" />
				</Form.Group>
			</Form.Row>
		</Form>
	);
};

export default FormSetting;
