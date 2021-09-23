import React, { useState, useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import settingsService from '../../services/settingsService';
import DataTable /*, {createTheme}*/ from 'react-data-table-component';
import { Button, Row, Col, Form } from 'react-bootstrap';
import Card from '../../Components/Card';
import FormSetting from './FormDetail';
import CModal from '../../Components/CModal';

const Detail = ({ activo = true, MessageDisplayer }) => {
	const [settingsItems, setSettingsItems] = useState([]);
	const [dataLoaded, setDataLoaded] = useState(false);
	const [SaveForm, setSaveForm] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const { id } = useParams();

	const fetchSettingsItems = () => {
		settingsService
			.GetSettingsDetail(id)
			.then((Setting) => {
				setSettingsItems(Setting.confDets.filter((x) => x.activo === activo));
				setDataLoaded(true);
				//setShowModal(true);
			});
	}


	const newItemForm = FormSetting({
		DetailId: id,
		HandleSave: (data) => {
			console.log("HandleSave - newItemForm")
			setSaveForm(false);
			setShowModal(false);
			if (data.success) {
				fetchSettingsItems();
			} else {

			}
			//console.log(data);
		},
		TriggerSave: SaveForm
	});

	useEffect(() => {
		if (id == null || typeof id == undefined) return;

		fetchSettingsItems();

	}, [activo, id]);

	const columns = useMemo(
		() => [
			{
				name: 'Llave',
				selector: 'id',
				sortable: true,
				center: true,
			},
			{
				name: 'Codigo',
				selector: 'codigo',
				sortable: true,
				center: true,
			},
			{
				name: 'Valor',
				selector: 'valor',
				sortable: true,
				center: true,
			},
			{
				name: 'Codigo Referencia',
				selector: 'codigoRef',
				center: true,
			},
			{
				name: '...',
				center: true,
				button: true,
				cell: (row) => (
					<Row>
						<Col>
							<Button variant="link" title="Editar" size="sm" href={`${process.env.PUBLIC_URL}/Settings/Detail/${row.id}`}>
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
		<>

			<Card title="Detalle de la Configuración" >

				<Row>
					<Col md={{ offset: 10 }} className="text-right" >
						<Button
							size="sm"
							onClick={() => {
								setShowModal(true);
							}}>
							Nuevo
						</Button>
					</Col>
				</Row>

				<Row>
					<Col md={{offset: 7}} className="text-right">
						<Form.Control type="text" autoComplete="off" id="txtBusqueda" name="txtBusqueda" />
					</Col>
					<Col>

					</Col>
				</Row>
				<hr/>
				<Row>
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
				</Row>

			</Card>

			<CModal
				Title="Nuevo Elemento"
				Body={newItemForm}
				CloseText="Cerrar"
				SaveText="Guardar"
				Show={showModal}
				handleClose={() => {
					console.log("Close");
					setShowModal(false);
					setSaveForm(false);

				}}
				handleSave={() => {
					console.log("Save");
					//setShowModal(false);
					setSaveForm(true);
				}}
			/>
		</>
	);
};

export default Detail;
