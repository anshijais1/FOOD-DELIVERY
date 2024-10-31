

import React from 'react';
import "../../styles/Menu.css";
import Header from '../../Components/Layout/Header';
import Starter from '../Home/Starter';

function Menu() {
  return (
    <>
      <Header />
      <div className="divmenu">
        <Starter menu="starter" />
        <Starter menu="maincourse" />
        <Starter menu="Dinner" />
        <Starter menu="Desert" />
      </div>
    </>
  );
}


export default Menu;
