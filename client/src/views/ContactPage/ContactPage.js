import React from 'react';

// [ REDUX ]
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// [ STYLING ]
import '../../assets/scss/main.scss';

// [ COMPONENTS ]


// [ VIEWS ]



// [ MAIN ]
const ContactPage = ( props ) => {
    
    return (
        <div className={`contactpage`}>
            ContactPage
        </div>
    )
};



// [ REDUX CONNECT ]
const mapStateToProps = createStructuredSelector({
    
    
});

const mapDispatchToProps = dispatch => ({
    
    
});


export default connect( mapStateToProps, mapDispatchToProps )( ContactPage );