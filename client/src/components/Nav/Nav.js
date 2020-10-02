import React, { useState, useEffect } from 'react';

// [ REDUX ]
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// [ STYLING ]
import '../../styles/sass/main.scss';

// [ COMPONENTS ]


// [ VIEWS ]



// [ MAIN ]
const Nav = ( props ) => {
    
    return (
        <div className={`nav`} id={`nav`}>
            <ul className={`nav__list`}>
                <li className={`nav__item`}>
                    <a href="#" className={`nav__link`}>Item 1</a>
                </li>
                <li className={`nav__item`}>
                    <a href="#" className={`nav__link`}>Item 2</a>
                </li>
                <li className={`nav__item`}>
                    <a href="#" className={`nav__link`}>Item 3</a>
                </li>
                <li className={`nav__item`}>
                    <a href="#" className={`nav__link`}>Item 4</a>
                </li>
            </ul>
        </div>
    )
};



// [ REDUX CONNECT ]
const mapStateToProps = createStructuredSelector({
    
    
});

const mapDispatchToProps = dispatch => ({
    
    
});


export default connect( mapStateToProps, mapDispatchToProps )( Nav );