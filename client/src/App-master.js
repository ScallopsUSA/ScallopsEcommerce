import React from 'react';

// [ STYLING ]
import './styles/sass/main.scss';

// [ COMPONENTS ]
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';

// [ VIEWS ]
import MainViewContainer from './views/MainViewContainer/MainViewContainer';



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
