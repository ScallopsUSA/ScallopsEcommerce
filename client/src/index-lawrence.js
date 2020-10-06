import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// styles
import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-pro-react.scss?v1.1.0";
import "assets/demo/demo.css";
import "assets/demo/react-demo.css";

// presentation pages
import Index from "views/Index.js";
import Presentation from "views/Presentation.js";
import Sections from "views/Sections.js";
// example pages
import AboutUs from "views/examples/AboutUs.js";
import ContactUs from "views/examples/ContactUs.js";
import LandingPage from "views/examples/LandingPage.js";
import Ecommerce from "views/examples/Ecommerce.js";
import ProductPage from "views/examples/ProductPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import AccountSettings from "views/examples/AccountSettings.js";
import LoginPage from "views/examples/LoginPage.js";
import RegisterPage from "views/examples/RegisterPage.js";
import CheckoutPage from "views/examples/CheckoutPage.js";

// [ APP ]
import App from "./App";

// [ REDUX / PERSIST ]
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<PersistGate persistor={persistor}>
				<Switch>
					<Route path='/index' render={(props) => <Index {...props} />} />
					<Route
						path='/presentation'
						render={(props) => <Presentation {...props} />}
					/>
					<Route path='/sections' render={(props) => <Sections {...props} />} />
					<Route path='/about-us' render={(props) => <AboutUs {...props} />} />
					<Route
						path='/contact-us'
						render={(props) => <ContactUs {...props} />}
					/>
					<Route
						path='/landing-page'
						render={(props) => <LandingPage {...props} />}
					/>
					<Route
						path='/ecommerce'
						render={(props) => <Ecommerce {...props} />}
					/>
					<Route
						path='/product-page'
						render={(props) => <ProductPage {...props} />}
					/>
					<Route
						path='/profile-page'
						render={(props) => <ProfilePage {...props} />}
					/>
					<Route
						path='/account-settings'
						render={(props) => <AccountSettings {...props} />}
					/>
					<Route
						path='/login-page'
						render={(props) => <LoginPage {...props} />}
					/>
					<Route
						path='/register-page'
						render={(props) => <RegisterPage {...props} />}
					/>
					<Route
						path='/checkout-page'
						render={(props) => <CheckoutPage {...props} />}
					/>
					<Redirect from='/' to='/presentation' />
				</Switch>
			</PersistGate>
		</BrowserRouter>
	</Provider>,
	document.getElementById("root")
);
