import React, { useState, useEffect } from 'react';

// [ REDUX ]
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// [ STYLING ]
import '../../assets/scss/main.scss';

// [ OAUTH ]
import queryString from 'querystring';

// [ COMPONENTS ]
import  GoogleLoginButton from './GoogleLoginButton/GoogleLoginButton';

// [ VIEWS ]



// [ MAIN ]
const GoogleLogin = ( props ) => {

    useEffect( () => {
        const query = queryString.parse( props.location.search );
        if( query.token ) {
            window.localStorage.setItem( "jwt", query.token );
            props.history.push("/");
        }
    });
    
    return (
        <div className={`google-login`}>
            <GoogleLoginButton />
        </div>
    )
};



// [ REDUX CONNECT ]
const mapStateToProps = createStructuredSelector({
    
    
});

const mapDispatchToProps = dispatch => ({
    
    
});


export default connect( mapStateToProps, mapDispatchToProps )( GoogleLogin );