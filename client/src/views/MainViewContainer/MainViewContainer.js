import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// [ REDUX ]
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// [ STYLING ]
import '../../styles/sass/main.scss';

// [ COMPONENTS ]


// [ VIEWS ]
import LandingPage from '../LandingPage/LandingPage';
import ProductPage from '../ProductPage/ProductPage';
import CategoryPage from '../CategoryPage/CategoryPage';
import ContactPage from '../ContactPage/ContactPage';


// [ MAIN ]
const MainViewContainer = ( props ) => {
    
    return (
        <div className={`mainview`}>
            <Switch>
                <Route exact path='/' component={LandingPage} />
                <Route exact path='/product' component={ProductPage} />
                <Route exact path='/category' component={CategoryPage} />
                <Route exact path='/contact' component={ContactPage} />
            </Switch>
        </div>
    )
};



// [ REDUX CONNECT ]
const mapStateToProps = createStructuredSelector({
    
    
});

const mapDispatchToProps = dispatch => ({
    
    
});


export default connect( mapStateToProps, mapDispatchToProps )( MainViewContainer );