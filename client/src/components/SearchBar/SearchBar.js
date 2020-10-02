import React, { useState, useEffect } from 'react';

// [ REDUX ]
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// [ STYLING ]
import '../../styles/sass/main.scss';

// [ COMPONENTS ]


// [ VIEWS ]



// [ MAIN ]
const SearchBar = ( props ) => {
    
    return (
        <div className={`searchbar`}>
            Search Bar &nbsp;
            <div className={`searchbar__input`}>
                 > Input field &nbsp;
            </div>
            <div className={`searchbar__submit`}>
                 > Submit button
            </div>
        </div>
    )
};



// [ REDUX CONNECT ]
const mapStateToProps = createStructuredSelector({
    
    
});

const mapDispatchToProps = dispatch => ({
    
    
});


export default connect( mapStateToProps, mapDispatchToProps )( SearchBar );