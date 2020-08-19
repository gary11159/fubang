import React, { Fragment } from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Body from './components/body';
import ScrollToTop from './components/scrollToTop';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [device, setDevice] = React.useState(false);

  return (
    <Fragment>
      <Header />
      <Body setDevice={(e) => setDevice(e)}/>
      <Footer device={device}/>
      <ScrollToTop/>
    </Fragment>
  );
}

export default App;
