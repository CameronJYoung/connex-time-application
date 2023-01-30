import React, {useEffect} from 'react';

import {Wrapper, FormattedMetrics} from './ResponseMenu.styles';
import useApiData from '../../hooks/useApiData';

function ResponseMenu() {
	const {data, isLoading} = useApiData('http://localhost:8080/metrics');

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
