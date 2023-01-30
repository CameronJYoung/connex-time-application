import React, {useEffect} from 'react';

import {Wrapper} from './TimeMenu.styles';
import useApiData from '../../hooks/useApiData';
import useEpochDiff from '../../hooks/useEpochDiff';

function TimeMenu() {
	const {data, isLoading} = useApiData('http://localhost:8080/time');
	const epochDifference = useEpochDiff(data);

	return (
		<Wrapper>
			<h1>Times</h1>
			<div className='time-data'>
				<span>Most recent epoch: {data?.epoch}</span><br />
				<span>Difference between client time and server time: {!isLoading && epochDifference}</span><br />
				<span>{ isLoading && 'Loading...' }</span>
			</div>
		</Wrapper>
	);
}

export default TimeMenu;
