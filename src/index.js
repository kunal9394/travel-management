// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// ReactDOM.render(<App />, document.getElementById('root'));
import {StrictMode } from "react"; 
import ReactDOM from "react-dom" 
import App from "./App" 
// import {BrowserRouter} from "react-router-dom" 
const rootElement = document.getElementById("root") 
ReactDOM.render( 
<StrictMode> 
    {/* <BrowserRouter> 
      <App /> 
   </BrowserRouter>  */}
   <App/>
</StrictMode>, 
  rootElement 
);