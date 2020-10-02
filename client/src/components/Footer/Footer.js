import React from 'react';

// [ REDUX ]
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// [ STYLING ]
import '../../styles/sass/main.scss';

// [ COMPONENTS ]


// [ VIEWS ]



// [ MAIN ]
const Footer = ( props ) => {
    
    return (
        <div className={`footer`} id={`footer`}>
            <ul className={`footer__list`}>
                <li className={`footer__item`}>
                    <a href="#" className={`footer__link`}>Item 1</a>
                </li>
                <li className={`footer__item`}>
                    <a href="#" className={`footer__link`}>Item 2</a>
                </li>
                <li className={`footer__item`}>
                    <a href="#" className={`footer__link`}>Item 3</a>
                </li>
                <li className={`footer__item`}>
                    <a href="#" className={`footer__link`}>Item 4</a>
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


export default connect( mapStateToProps, mapDispatchToProps )( Footer );