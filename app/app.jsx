import React from 'react';
import ReactDOM from 'react-dom';

import List from './comps/List.jsx';
import Canvas from './comps/Canvas.jsx';
import Home from './comps/Home.jsx';


import normalize from './assets/lib/css/normalize.css'; 
import animate from './assets/lib/css/animate.css'; 
import bootstrapcss from './assets/lib/bootstrap-4.0.0-alpha.6-dist/css/bootstrap.min.css'; 
import style from './assets/css/style.css'; 




ReactDOM.render(
	<div>
		<Home/>
		<Canvas/>
	</div>,
	document.getElementById('root')
)