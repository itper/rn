import React ,{Component} from 'react';
import {Provider} from 'react-redux';
// import configureStore from './store/configureStore';
import Navigation from './containers/Navigation';

// const store = configureStore();


class App extends Component{
    render(){
        return (
                <Navigation/>
        )
    }
}
export default App;