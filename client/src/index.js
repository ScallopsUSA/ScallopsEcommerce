import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

// [ STYLNG ]

// [ APP ]
import App from "App";

// [ REDUX / PERSIST ]
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

// [ MAIN ]
ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<PersistGate persistor={persistor}>
                <Switch>
				    <Route path='/' render={(props) => <App {...props} />} />
                </Switch>
			</PersistGate>
		</BrowserRouter>
	</Provider>,
	document.getElementById("root")
);

serviceWorker.unregister();
