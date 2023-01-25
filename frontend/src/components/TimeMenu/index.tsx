import React from 'react';

import { Wrapper } from './TimeMenu.styles';

type Props = {}

function TimeMenu({}: Props) {
  return (
    <Wrapper>
      <h1>Times</h1>
      <div>
        <span>Most recent epoch</span>
        <span>Difference between client time and server time</span>
      </div>
    </Wrapper>
  )
}

export default TimeMenu