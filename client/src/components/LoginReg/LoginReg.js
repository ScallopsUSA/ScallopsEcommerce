import React, { useState, useEffect } from 'react';

// [ REDUX ]
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// [ STYLING ]
import '../../styles/sass/main.scss';

// [ COMPONENTS ]


// [ VIEWS ]



// [ MAIN ]
const LoginReg = ( props ) => {
    
    return (
        <div className={`loginreg`}>
            LoginReg
        </div>
    )
};



// [ REDUX CONNECT ]
const mapStateToProps = createStructuredSelector({
    
    
});

const mapDispatchToProps = dispatch => ({
    
    
});


export default connect( mapStateToProps, mapDispatchToProps )( LoginReg );