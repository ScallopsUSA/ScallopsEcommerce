import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

// styles
import 'assets/scss/main.scss';
import "assets/css/nucleo-icons.css";
// import "assets/scss/blk-design-system-pro-react.scss?v1.1.0";
// import "assets/scss/blk-design-system-pro-react.scss";
// import "assets/demo/demo.css";
// import "assets/demo/react-demo.css";

// presentation pages
import Index from "views/Index.js";
import Presentation from "views/Presentation.js";
import Sections from "views/Sections.js";
// example pages
import ApiTest from "views/examples/ApiTest.js"
import AboutUs from "views/examples/AboutUs.js";
import ContactUs from "views/examples/ContactUs.js";
import Ecommerce from "views/examples/Ecommerce.js";
import ProductPage from "views/examples/ProductPage.js";
import AccountSettings from "views/examples/AccountSettings.js";
import LoginPage from "views/examples/LoginPage.js";
import RegisterPage from "views/examples/RegisterPage.js";
import CheckoutPage from "views/examples/CheckoutPage.js";

// [ COMPONENTS ]
// [ VIEWS ]

function App() {
	return (
		<div>
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
				<Route path='/ecommerce' render={(props) => <Ecommerce {...props} />} />
				<Route
					path='/product-page'
					render={(props) => <ProductPage {...props} />}
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
				<Route
					path='/apitest'
					render={(props) => <ApiTest {...props} />}
				/>
			</Switch>
		</div>
	);
}
export default App;
