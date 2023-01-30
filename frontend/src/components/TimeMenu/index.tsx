import React, { useEffect } from 'react';

import { Wrapper } from './TimeMenu.styles';
import useApiData from '../../hooks/useApiData';
import currentEpochSeconds from '../../utils/currentEpochSeconds';
import epochToTimeDiff from '../../utils/epochToTimeDiff';
import useEpochDiff from '../../hooks/useEpochDiff';

type Props = {}

function TimeMenu({}: Props) {
  const { data, isLoading } = useApiData('http://localhost:8080/time');
  const epochDifference = useEpochDiff(data);
  
  return (
    <Wrapper>
      <h1>Times</h1>
      <div>
        <span>Most recent epoch: {data && data.epoch}</span><br />
        <span>Difference between client time and server time: {!isLoading && epochDifference}</span><br />
        <span>{ isLoading && 'Loading...' }</span>
      </div>
    </Wrapper>
  )
}

export default TimeMenu