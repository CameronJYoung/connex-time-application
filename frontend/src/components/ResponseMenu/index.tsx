import React, {useEffect} from 'react';

import {Wrapper, FormattedMetrics} from './ResponseMenu.styles';
import useApiData from '../../hooks/useApiData';
import config from '../../config';

function ResponseMenu() {
	const {data, isLoading} = useApiData(`${config.apiUrl}/metrics`);

	return (
		<Wrapper>
			<h1>Analytics</h1>
			<FormattedMetrics>
				{
					data?.data
				}
			</FormattedMetrics>
		</Wrapper>
	)
}

export default ResponseMenu;
