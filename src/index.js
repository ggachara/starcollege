import React from 'react';
import ReactDOM from 'react-dom';
import StepperForm from './stepper.js'
import Bar from './bar.js'


ReactDOM.render(
  <React.StrictMode>
    <Bar />
    <StepperForm />
  </React.StrictMode>,
  document.getElementById('root')
);

