import React,{Component} from 'react';
import {connect} from 'react-redux';
import Menu from '../component/menu.jsx';
import {menuData,toggle} from '../action/action.jsx';

class App extends Component {

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(menuData())
    }

    handleClick(index) {
        const {dispatch} = this.props;
        dispatch(toggle(index))
    }

    render() {
        return (
            <div>
                <Menu {...this.props} handleClick={this.handleClick.bind(this)}>
                </Menu>

                <div>
                    {this.props.children}
                </div>
            </div>)
    }
}

function storeFormatter(state) {
    console.log(state)
    let { rows,active,routing } = state;

    const ret = {
        rows: rows.length ? rows : [],
        active: active || 0,
        routing: routing
    };
    return ret
}


function fun(dispatch) {
    console.log(dispatch)
    return dispatch
}

export default connect(storeFormatter)(App)