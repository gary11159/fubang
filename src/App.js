import React, { Fragment } from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Body from './components/body';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <Fragment>
      <Header/>
      <Body/>
      <Footer/>
    </Fragment>
  );
}

export default App;
