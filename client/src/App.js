import React from 'react';

// [ COMPONENTS ]
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import MainViewContainer from './views/MainViewContainer/MainViewContainer';

// [ VIEWS ]

import './styles/sass/main.scss';

function App() {
  return (
    <div className={`app-wrapper u-margin-top-sm`}>
        <Nav />
        <MainViewContainer />
        <Footer />
    </div>
  );
}

export default App;
