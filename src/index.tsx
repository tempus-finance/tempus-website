import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

import './fonts/source-sans-pro/SourceSansPro-Regular.ttf';
import './fonts/source-sans-pro/SourceSansPro-SemiBold.ttf';
import './fonts/source-sans-pro/SourceSansPro-Bold.ttf';
import './fonts/manrope/Manrope-Medium.ttf';
import './fonts/manrope/Manrope-Bold.ttf';

import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
