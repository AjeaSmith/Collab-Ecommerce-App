import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
// Routes
import Home from './components/Home';
import Accessories from './components/Accessories';
import Apparel from './components/Apparel';
import Skateboards from './components/Skateboards';
import PageNotFound from './components/PageNotFound';

function App() {
	return (
		<BrowserRouter>
			<div className='App'>
				<h1 className='font-serif text-center text-red-600'>Hey Team, Hi5!</h1>
				<Route exact path='/' component={Home} />
				<Route path='/accessories' component={Accessories} />
				<Route path='/apparel' component={Apparel} />
				<Route path='/skateboards' component={Skateboards} />
				<Route path='/page-not-found' component={PageNotFound} />
			</div>
		</BrowserRouter>
	);
}

export default App;
