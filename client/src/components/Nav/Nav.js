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
                    <a href="/" className={`nav__link`}>Home</a>
                </li>
                <li className={`nav__item`}>
                    <a href="/product" className={`nav__link`}>Product</a>
                </li>
                <li className={`nav__item`}>
                    <a href="/category" className={`nav__link`}>Category</a>
                </li>
                <li className={`nav__item`}>
                    <a href="/contact" className={`nav__link`}>Contact</a>
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