import React, { ReactNode } from 'react';

import { ContainerWrapper } from './Container.styles';

type Props = {
  children: ReactNode;
}

function Container({
  children
}: Props) {
  return (
    <ContainerWrapper>
      { children }
    </ContainerWrapper>
  )
}

export default Container;
