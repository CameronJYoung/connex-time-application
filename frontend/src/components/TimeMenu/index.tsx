import React, {useEffect} from 'react';

import {Wrapper} from './TimeMenu.styles';
import useApiData from '../../hooks/useApiData';
import useEpochDiff from '../../hooks/useEpochDiff';
import config from '../../config';

function TimeMenu() {
	const {data, isLoading} = useApiData(`${config.apiUrl}/time`);
	const epochDifference = useEpochDiff(data);

	return (
		<Wrapper>
			<h1>Times</h1>
			{
				isLoading ?
					<div className='time-data'><span>Loading...</span></div> : (
					<div className='time-data'>
						<span>Most recent epoch: {data?.epoch}</span>
						<span>Difference between client time and server time: {!isLoading && epochDifference}</span>
					</div>
				)
			}
		</Wrapper>
	);
}

export default TimeMenu;
