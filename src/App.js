import React from 'react';
import CardList from './CardList';
import searchBox from './searchBox';
import { robots } from './robots';

const App = () => {
    return(
        <div>
            <h1>RoboFriends</h1>
            <searchBox />
            <CardList robots={robots}/>
        </div>
    )
}

export default App;