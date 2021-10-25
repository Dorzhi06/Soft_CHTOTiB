import React from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, PanelHeaderBack } from '@vkontakte/vkui';

const MainPage = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderBack onClick={props.go} data-to="home"/>}>
			Hello stupid
		</PanelHeader>
		<h1>Hi my friends</h1>
	</Panel>
);

MainPage.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default MainPage;
