import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';

import 'b:Page';
import Container from 'b:Container';

ReactDOM.render(<Container />, document.getElementById('root'));
registerServiceWorker();
