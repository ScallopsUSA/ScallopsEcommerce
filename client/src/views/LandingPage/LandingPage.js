import React from 'react';

// [ REDUX ]
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// [ STYLING ]
import '../../assets/scss/main.scss';

// [ COMPONENTS ]


// [ VIEWS ]



// [ MAIN ]
const LandingPage = ( props ) => {
    
    return (
        <div className={`landingpage`}>
            <div className={`landingpage__header`}>
                Landing Page Header
            </div>
            <div className={`landingpage__image`}>
                Image
            </div>
            <main className={`landingpage__main`}>
                <section className={`landingpage__main landingpage__main--1`}>
                    Section 1
                </section>
                <section className={`landingpage__main landingpage__main--2`}>
                    Section 2
                </section>
                <section className={`landingpage__main landingpage__main--3`}>
                    Section 3
                </section>
            </main>
        </div>
    )
};



// [ REDUX CONNECT ]
const mapStateToProps = createStructuredSelector({
    
    
});

const mapDispatchToProps = dispatch => ({
    
    
});


export default connect( mapStateToProps, mapDispatchToProps )( LandingPage );