/*# ---------------------------------------------
# ---------------------------------------------
# Author: Brian Cubero
# Date:   2018-08-31 16:24:58
# Last Modified by:   cubero.bv
# Last Modified time: 2018-09-01 09:01:47
# ---------------------------------------------
# ---------------------------------------------*/
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<App />, div);
	ReactDOM.unmountComponentAtNode(div);
});
