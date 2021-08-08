

import React, { useState } from 'react';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import Home from './Home';
import '../node_modules/materialize-css/dist/css/materialize.min.css';
//import '../node_modules/materialize-css/dist/js/materialize.min.js';
import '../node_modules/materialize-css/dist/js/materialize.min.js';
import './App.css';
const App = () => {
    
   return(
       <>
       <div className="wrap-content">
           <div className="container">
               <Router>
                   <Route exact path="/" component={Home}>

                   </Route>
               </Router>
           </div>
       </div>
        
       </>
   )

}

export default App;
