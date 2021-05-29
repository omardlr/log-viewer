import React, { useState,useEffect, useMemo } from 'react';
import {useParams} from "react-router-dom";
import settingsSevice from '../../services/settingsService';
import DataTable/*, {createTheme}*/ from 'react-data-table-component';
import {Button,Row, Col} from 'react-bootstrap';

const Detail = ({estado = 1}) =>{
    const [settingsItems,setSettingsItems] = useState(null);
    const {id} = useParams();

    useEffect(() => {
        debugger;
        if(id == null || typeof(id) == undefined) return;

        settingsSevice.GetSettingsDetail(id).then(
            (Setting) => setSettingsItems(
                Setting.filter(x => x.estado === estado)
                ));

	},[estado,id]);

    const columns = useMemo(() => [
        {
            name: 'Llave',
            selector: 'llave',
            sortable: true,
            center: true
        },
        {
            name: 'Valor',
            selector: 'valor',
            sortable: true,
            center: true
        },
        {
            name: 'Codigo Referencia',
            selector: 'codref',
            center: true
        },
        {
            name: '...',
            center: true,
            button: true,
            cell: row =>
                    <Row>
                        <Col>
                            <Button variant="link" title="Editar" size="sm" href={`/Settings/Edit/${row.id}`}>Editar</Button>
                        </Col>
                    </Row>
        }
    ],[]);

    return(<>
        {!settingsItems?"Cargando...":
        <DataTable
            title = "Detalle Configuracion"
            columns = {columns}
            data={settingsItems}
            striped={true}
         />
        }
        </>);
}

export default Detail;