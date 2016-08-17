import {Provider} from 'react-redux';
import React,{Component} from 'react';
import {render} from 'react-dom';
import configStore from './store/store.jsx';
import Menu from './container/Menu.jsx';
import App from './container/App.jsx';
import { Router, Route, Link, Redirect, hashHistory,IndexRoute } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import Home from './component/home.jsx';
//require( '../../css/sass/ie.scss');
import '../../css/stylesheets/ie.css';
//var $ = window.$ = window.jQuery = require('jquery'),
//    bootstrap = require('bootstrap')

//const middleware = routerMiddleware(hashHistory)
const store = configStore();

const history = syncHistoryWithStore(hashHistory, store)

class ALL extends Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}



render((
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={Menu}>
                <IndexRoute component={Home}/>
                <Route path="home" component={Home}/>
                <Route path="about" component={App}/>
            </Route>
        </Router>
    </Provider>
), document.getElementById("content"))