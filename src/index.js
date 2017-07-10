/**
 * Created by fran on 9/7/17.
 */

import React from 'react';
import ReactDOM from 'react-dom';

//If is an own import I need relative path
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCuLh2Zp5CtBAZsMnFB--JYqe-eeD0cAKg';


const App = () => {
    return <div>
        <SearchBar/>
    </div>
};


ReactDOM.render(<App/>, document.querySelector('.container'));