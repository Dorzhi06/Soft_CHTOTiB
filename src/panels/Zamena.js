import React from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, PanelHeaderBack } from '@vkontakte/vkui';

const MainPage = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderBack onClick={props.go} data-to="home"/>}>
			Замена на понедельник
		</PanelHeader>
        <h1 align="center">Замена ИСиП-18-1 на понедельник</h1>
		<table>
            <thead>
                <tr>
                    <th>№</th>
                    <th>Предмет</th>
                    <th>Аудитория</th>
                    <th>ФИО преподователя </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1,2</td>
                    <td>МДК. 01.03 Разработка мобильных приложений</td>
                    <td>54</td>
                    <td>Зорин А.А</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Экономика отрасли</td>
                    <td>303</td>
                    <td>Варфоломеева А.С</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>МДК 11.01 Техн. разр. БД</td>
                    <td>55</td>
                    <td>Юн Р.Е</td>
                </tr>
            </tbody>
        </table>
	</Panel>
);

MainPage.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default MainPage;
