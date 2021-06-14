import React, { useState, useEffect, useMemo } from 'react';
import settingsSevice from '../../services/settingsService';
import DataTable /*, {createTheme}*/ from 'react-data-table-component';
import { Button, Row,Col } from 'react-bootstrap';

import Card from '../../Components/Card';
import FormSetting from './FormSetting';

const Settings = ({ estado = 1 }) => {
	const [settingsItems, setSettingsItems] = useState(null);

	useEffect(() => {
		/*const fetchData= async () => {
            const data = await settingsSevice.GetSettings();
            setSettingsItems(data.filter(itm => itm.estado === estado));
        }

        fetchData();*/
		settingsSevice.GetSettings().then((Setting) => setSettingsItems(Setting.filter((x) => x.estado === estado)));
	}, [estado]);

	const columns = useMemo(
		() => [
			{
				name: 'Sistema',
				selector: 'sistema',
				sortable: true,
				center: true,
			},
			{
				name: 'Modulo',
				selector: 'modulo',
				sortable: true,
				center: true,
			},
			{
				name: 'Seccion',
				selector: 'seccion',
				sortable: true,
				center: true,
			},
			{
				name: '...',
				center: true,
				button: true,
				cell: (row) => (
					<Row>
						{/*
                        <Col>   
                            <Button variant="link" title="Detalle" size="sm" href={`Settings/Edit/${row.id}`}>Detalle</Button>
                        </Col>
                        */}
						<Col>
							<Button variant="link" title="Editar" size="sm" href={`/Settings/Edit/${row.id}`}>
								Editar
							</Button>
						</Col>
					</Row>
				),
			},
		],
		[]
	);

	return (
		<Card>
            <FormSetting />
			{!settingsItems ? (
				'Cargando...'
			) : (
				<DataTable title="Configuraciones"  columns={columns} data={settingsItems} striped={true} />
			)}
		</Card>
	);
};

export default Settings;
