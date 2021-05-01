import React, { useState, useEffect } from 'react';
import DropDown from './DropDown';
import DropDownSearch from './DropDownSearch';
import DropDownList from './DropDownList';
// import DropDownUser from './DropDownUser';
import DropDownItem from './DropDownItem';

const DropDownContainer = () => {
	const [alerts, setAlerts] = useState([]);
	const [messages, setMessages] = useState([]);

	useEffect(() => {
		setAlerts([
			{
				id: 1,
				date: 'Diciembre 10, 2019',
				text: 'Esto es un titulo 1',
			},
			{
				id: 2,
				date: 'Diciembre 11, 2019',
				text: 'Esto es un titulo 2',
			},
			{
				id: 3,
				date: 'Diciembre 12, 2019',
				text: 'Esto es un titulo 3',
			},
		]);

		setMessages([
			{
				id: 1,
				date: 'Diciembre 10, 2019',
				text: 'Esto es un titulo de un mensaje 1',
			},
			{
				id: 2,
				date: 'Diciembre 11, 2019',
				text: 'Esto es un titulo de un mensaje 2',
			},
		]);
	}, []);

	return (
		<ul className="navbar-nav align-items-center ml-auto">
			<DropDownSearch />
			{/* Dropdown Alertas */}
			<DropDown icon="bell">
				<DropDownList headerText="Alerts" headerIcon="bell" footerText="View All Alerts">
					{alerts.map((item) => {
						return <DropDownItem key={item.id} date={item.date} text={item.text} />;
					})}
				</DropDownList>
			</DropDown>

			{/* Dropdown Mensajes */}
			<DropDown icon="mail">
				<DropDownList
					headerText="Message Center"
					headerIcon="mail"
					footerText="View All Message"
					items={messages}
				>					
					{messages.map((item) => {
						return <DropDownItem key={item.id} date={item.date} text={item.text} />;
					})}
				</DropDownList>
			</DropDown>
			{/* <DropDownUser userFullName="José Maldonado" userEmail="adrianenelpozo@gmail.com" /> */}
		</ul>
	);
};

export default DropDownContainer;
