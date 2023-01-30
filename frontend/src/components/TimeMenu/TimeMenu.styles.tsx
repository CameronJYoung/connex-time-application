import { styled } from '@stitches/react';

export const Wrapper = styled('section', {
  width: '50%',
  height: '100%',
  borderRight: '1px solid black',
  backgroundColor: 'white',

  'h1': {
    padding: '1rem',
    paddingBottom: '0.5rem'
  },
  '.time-data': {
    paddingLeft: '1rem'
  }
});