import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Form from './components/form';
import Details from './components/details';

function App() {
	return (
		<Router>
			<div className="container">
				<Navbar />
				<br />
				<Route path="/" exact component={Form} />
				<Route path="/details" component={Details} />
			</div>
		</Router>
	);
}

export default App;
