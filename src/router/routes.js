import React from 'react';
import App from '../pages/App';
import Show from '../pages/Show';
import List from '../pages/List';

const routes = [
	{
		Component: List,
		key: 'List',
		path: '/list'
	},
	{
		Component: Show,
		key: 'Show',
		path: '/show/:id'
	},
	{
		Component: App,
		key: 'App',
		path: '/'
	}
];

export default routes;
