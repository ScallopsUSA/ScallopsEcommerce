import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

// [ STYLNG ]
import './index.css';

// [ APP ]
import App from './App';

// [ REDUX / PERSIST ]
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

// [ MAIN ]
ReactDOM.render(
    <Provider store={store}>
       <BrowserRouter>
          <PersistGate persistor={persistor} >
             <App />
          </PersistGate>
       </BrowserRouter>
    </Provider>
   , document.getElementById('root')
 );
 
 
 serviceWorker.unregister();