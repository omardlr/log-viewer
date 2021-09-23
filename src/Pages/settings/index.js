import React, { useState, useEffect, useMemo } from 'react';
import settingsService from '../../services/settingsService';
import DataTable /*, {createTheme}*/ from 'react-data-table-component';
import { Button, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

import Card from '../../Components/Card';
import FormSetting from './FormSetting';
//import { propTypes } from 'react-bootstrap/esm/Image';

const Settings = ({ activo = true }) => {
	const [settingsItems, setSettingsItems] = useState([]);
	const [dataLoaded,setdataLoaded] = useState(false);

	useEffect(() => {
		/*const fetchData= async () => {
            const data = await settingsSevice.GetSettings();
            setSettingsItems(data.filter(itm => itm.estado === estado));
        }

        fetchData();*/
		settingsService.GetSettings().then((Setting) => {
			const filteredData = Setting.filter((x) => x.activo === activo);
			filteredData.forEach(x => {
				x.seccion = x.seccion.replace("_"," ");
			});
			setSettingsItems(filteredData);
			setdataLoaded(true);
		});
	}, []);

	const columns = useMemo(
		() => [
			{
				name: 'Sistema',
				selector: 'sistema',
				sortable: true,
				center: true,
				compact: true
			},
			{
				name: 'Modulo',
				selector: 'modulo',
				sortable: true,
				center: true,
				compact: true
			},
			{
				name: 'Seccion',
				selector: 'seccion',
				sortable: true,
				center: true,
				compact: true
			},
			{
				name: '...',
				center: true,
				button: true,
				compact: true,
				cell: (row) => (
					<Row>
						<Col>
							<Button variant="link" title="Detalle" size="sm" href={`${process.env.PUBLIC_URL}/Settings/Detail/${row.id}`}>
								Detalle
							</Button>
						</Col>
						{/*<Col>
							<Button variant="link" title="Editar" size="sm" href={`${process.env.PUBLIC_URL}/Settings/Edit/${row.id}`}>
								Editar
							</Button>
						</Col>*/}
					</Row>
				),
			},
		],
		[]
	);

	return (
		<>
			<Card title="Configuraciónes Generales">
				<FormSetting />
				
				<DataTable
					title={null}
					noHeader={true}
					columns={columns}
					data={settingsItems}
					striped={true}
					dense={true}
					responsive={true}
					progressPending={!dataLoaded}
					pagination={true} />
			
			</Card>
		</>
	);
};

Settings.protoType = {
	activo: PropTypes.bool
};

Settings.defaultProps = {
	activo: true
};

export default Settings;
