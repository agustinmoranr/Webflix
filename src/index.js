import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import WatchPlayer from './pages/WatchPlayer';

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<Switch>
				<Route exact path='/'>
					<Home />
				</Route>
				<Route path='/watch/:id'>
					<WatchPlayer />
				</Route>
			</Switch>
		</Router>
	</React.StrictMode>,
	document.getElementById('root'),
);
