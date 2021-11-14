import React from 'react';
import PropTypes from 'prop-types';

import chtotib from '../img/CHTOTiB.jpg';

import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar } from '@vkontakte/vkui';

const Home = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader>
            <table>
                <thead>
                <tr>
                    <th><h1>Расписание ИСиП-18-1</h1></th>
                    <th><a href="https://www.chtotib.ru/"><img src={chtotib} width="45" height="45"/></a></th>
                </tr>
            </thead>
            </table>
        </PanelHeader>
		{fetchedUser &&
		<Group header={<Header mode="secondary">Пользователь</Header>}>
			<Cell
				before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
				description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
			>
				{`${fetchedUser.first_name} ${fetchedUser.last_name} группа ИСиП-18-1`}
			</Cell>
		</Group>}

		<Group header={<Header mode="secondary">Навигация</Header>}>
            <Div>
                <Button stretched size="l" mode="secondary" onClick={go} data-to="mainPage">
					Расписание на понедельник
				</Button>
			</Div>
            <Div>
                <Button stretched size="l" mode="secondary" onClick={go} data-to="zamena">
					Замена на понедельник
				</Button>
			</Div>
		</Group>
	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;
