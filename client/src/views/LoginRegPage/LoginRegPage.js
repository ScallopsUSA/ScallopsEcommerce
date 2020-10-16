import React, { useState, useEffect } from 'react';

// [ REDUX ]
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from 'redux/user/user.selectors';
import { setCurrentUser } from 'redux/user/user.actions';

// [ STYLING ]
import 'assets/scss/main.scss';

// [ COMPONENTS ]
import GoogleLoginButton from 'components/LoginReg/GoogleLoginButton/GoogleLoginButton';
import FacebookLoginButton from 'components/LoginReg/FacebookLoginButton/FacebookLoginButton';

// [ VIEWS ]



// [ MAIN ]
const LoginRegPage = ( props, {currentUser, setCurrentUser} ) => {
    
    return (
        <div className={`google-login`}>
            <GoogleLoginButton />
                < br/>
            <FacebookLoginButton />
        </div>
    )
};



// [ REDUX CONNECT ]
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch( setCurrentUser(user) )
});

export default connect( mapStateToProps, mapDispatchToProps )( LoginRegPage );