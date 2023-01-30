import React from 'react';

import Container from './components/Container';
import ResponseMenu from './components/ResponseMenu';
import TimeMenu from './components/TimeMenu';

function App() {
	return (
		<div className='App'>
			<Container>
				<TimeMenu />
				<ResponseMenu />
			</Container>
		</div>
	);
}

export default App;
