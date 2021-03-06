import React from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, PanelHeaderBack } from '@vkontakte/vkui';

const MainPage = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderBack onClick={props.go} data-to="home"/>}>
			Расписание на понедельник
		</PanelHeader>
        <h1 align="center">Расписание ИСиП-18-1 на понедельник</h1>
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
                    <td>1</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>МДК 01.02 Поддержка и тестир. ПМ</td>
                    <td>23/</td>
                    <td>Панова С.О</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Экономика отрасли</td>
                    <td>303</td>
                    <td>Варфоломеева А.С</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>МДК 01.01 Разработка ПМ</td>
                    <td>58</td>
                    <td>Семченкова И.И</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>МДК 01.01 Разработка ПМ</td>
                    <td>58</td>
                    <td>Семченкова И.И</td>
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
