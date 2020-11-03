import React, { useState, useEffect } from "react";

// [ REDUX ]
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../../redux/user/user.selectors";
import { setCurrentUser } from "../../../redux/user/user.actions";

// [ STYLING ]
import "assets/scss/main.scss";

// [ FB-LOGIN ]
import FacebookLogin from "react-facebook-login";
import keys from "../../../secretKeys";

// [ COMPONENTS ]

// [ VIEWS ]

// [ MAIN ]
const FacebookLoginButton = ({ currentUser, setCurrentUser, ...props }) => {
	const responseFacebook = (res) => {
		console.log("fb res: ", res);
		const { name, userId, accessToken, email } = res;
		const { url } = res.picture.data;
		if (res.name) {
			setCurrentUser({
				firstName: name,
				_id: userId,
				imageUrl: url,
				email,
				token: accessToken,
			});
			console.log("facebook setCurrentUser");
		}
	};

	return (
		<div className={`facebook-login`}>
			<FacebookLogin
				appId={keys.FB_APP_ID}
				autoload={true}
				fields='name, email, picture'
				scope='public_profile, user_friends'
				callback={responseFacebook}
				cssClass='facebook-login-btn'
				icon='fa-facebook'
			/>
		</div>
	);
};

// [ REDUX CONNECT ]
const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
	setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(FacebookLoginButton);
