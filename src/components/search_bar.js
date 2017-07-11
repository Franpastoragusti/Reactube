/**
 * Created by fran on 9/7/17.
 */

import React, { Component } from 'react';

class SearchBar extends Component{


    constructor(props){
       super(props);

       this.state = { term : '' };
    }

    render() {
        return (
            <div>
                <input
                    value={this.state.term}
                    onChange={(event) => this.setState({ term: event.target.value}) }/>
            </div>
        )
    }

}

//export as a global to import
export default SearchBar;