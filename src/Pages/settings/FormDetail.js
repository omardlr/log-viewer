import React, { useState, useEffect } from 'react';
import settingsService from '../../services/settingsService';
import PropTypes from 'prop-types';
import { Form, Col } from 'react-bootstrap';

const FormDetail = ({ DetailId, HandleSave, TriggerSave }) => {
    const [data, setData] = useState({ Codigo: "", ItemValue: "", CodRef: "" });

    useEffect(() => {
        if(TriggerSave)
        {
            console.log("Guardar Aqui: " + DetailId);
            console.log(data);

            settingsService.InsertNewDetail(DetailId, data.Codigo, data.ItemValue, data.CodRef).then((e) => {
                console.log(e);
                HandleSave({
                    data: { ...data },
                    success: true,
                    message: ""
                });
            });
        }
    }, [TriggerSave]);

    const SetFormData = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    }

    return (
        <Form>
            <Form.Row>
                <Form.Group as={Col}>
                    <Form.Label htmlFor="txtItemValor">
                        <b>Codigo</b>
                    </Form.Label>
                    <Form.Control type="text" autoComplete="off" id="txtCodigo" name="Codigo" onChange={(e) => SetFormData(e)} />
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label htmlFor="txtItemValor">
                        <b>Valor</b>
                    </Form.Label>
                    <Form.Control type="text" autoComplete="off" id="txtItemValor" name="ItemValue" onChange={(e) => SetFormData(e)} />
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label htmlFor="txtCodRef">
                        <b>Codigo Referencia</b>
                    </Form.Label>
                    <Form.Control type="text" id="txtCodRef" autoComplete="off" name="CodRef" onChange={(e) => SetFormData(e)} />
                </Form.Group>
            </Form.Row>
        </Form>
    );
}


FormDetail.propTypes = {
    HandleSave: PropTypes.func,
    TriggerSave: PropTypes.bool
}

export default FormDetail;
