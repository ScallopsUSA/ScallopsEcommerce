import React from 'react';

// [ REDUX ]
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// [ STYLING ]
import '../../styles/sass/main.scss';

// [ COMPONENTS ]


// [ VIEWS ]



// [ MAIN ]
const ProductPage = ( props ) => {
    
    return (
        <div className={`productpage`}>
            ProductPage
        </div>
    )
};



// [ REDUX CONNECT ]
const mapStateToProps = createStructuredSelector({
    
    
});

const mapDispatchToProps = dispatch => ({
    
    
});


export default connect( mapStateToProps, mapDispatchToProps )( ProductPage );