import React from 'react';
import Header from '../header';
import Footer from '../footer'
import FoodstuffList from '../foodstuff-list';
import './app.scss';

const App = () => {
  return (
    <main role="main" className="foodstuff">
      <Header/>
      <FoodstuffList/>
      <Footer />
    </main>
  );
};

export default App;
