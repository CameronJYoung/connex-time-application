import { styled } from '@stitches/react';

export const Wrapper = styled('section', {
  width: '50%',
  height: '100%',
  overflowY: 'scroll',
  overflowX: 'scroll',
  borderLeft: '1px solid black',
  backgroundColor: 'white',

  'h1': {
    padding: '1rem',
    paddingBottom: '0.5rem'
  },
});

export const FormattedMetrics = styled('pre', {
  paddingLeft: '1rem'
})