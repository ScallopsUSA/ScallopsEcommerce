import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

// [ KEYS ]
import keys from '../../../secretKeys';

// [ REDUX ]
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../../redux/user/user.selectors';
import { setCurrentUser } from '../../../redux/user/user.actions';

// [ STYLING ]
import '../../../assets/scss/main.scss';

// [ COMPONENTS ]
import GoogleLogin from 'react-google-login';
import GoogleLoginButtonOG from './GoogleLoginButtonOG';

// [ VIEWS ]



// [ MAIN ]
const GoogleLoginButton = ( {currentUser, setCurrentUser, clickLogin, ...props} ) => {
    const history = useHistory();

    const resGoogleSuccess = res => {
        // for( const element in res ) console.log( element, ": ", res[element] );
        console.log( "profileObj: ", res.profileObj );
        const { googleId, imageUrl, email, givenName, name, familyName } = res.profileObj;
        setCurrentUser({
            _id: googleId,
            firstName: givenName,
            lastName: familyName,
            email,
            imageUrl
        })
        history.push('/');
        
    }

    const resGoogleFail = res => {
        console.log( 'resGFail: ', res );
    }

    return (
        <>
            <GoogleLogin
                clientId={keys.GOOGLE_CLIENT_ID}
                buttonText="react-Login with Google!"
                onSuccess={resGoogleSuccess}
                onFailure={resGoogleFail}
                cookiePolicy={`single_host_origin`}
            />

            <GoogleLoginButtonOG />
        </>
    )
};



// [ REDUX CONNECT ]
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch( setCurrentUser(user) )
});


export default connect( mapStateToProps, mapDispatchToProps )( GoogleLoginButton );