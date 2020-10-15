import React, { useState, useEffect } from 'react';

// [ REDUX ]
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { setCurrentUser } from '../../redux/user/user.actions';

// [ STYLING ]
import '../../assets/scss/main.scss';

// [ OAUTH ]
import queryString from 'query-string';

// [ COMPONENTS ]
import  GoogleLoginButton from './GoogleLoginButton/GoogleLoginButton';

// [ VIEWS ]



// [ MAIN ]
const GoogleLogin = ( props, {currentUser, setCurrentUser} ) => {

    
    
    return (
        <div className={`google-login`}>
            <GoogleLoginButton />
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

export default connect( mapStateToProps, mapDispatchToProps )( GoogleLogin );