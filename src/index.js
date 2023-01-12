import React from "react";
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import { BrowserRouter } from 'react-router-dom';
// import { PlantsContext } from '../context/PlantsContext';

//browserRouter component can only have one childthis router keeps UI in sync with the URL. The main job of a <Router> component is to create a history object to keep track of the location (URL). When the location changes because of a navigation action, the child component (in this case <App>) is re-rendered.

ReactDOM.render(
    <React.StrictMode>
        {/* <PlantsContext> */}
            <BrowserRouter>
                <App />
            </BrowserRouter>
        {/* </PlantsContext> */}
    </React.StrictMode>, document.getElementById('root'));