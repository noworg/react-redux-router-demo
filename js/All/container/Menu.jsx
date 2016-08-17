import React,{Component} from 'react';
import {connect} from 'react-redux';
import Menu from '../component/menu.jsx';
import {fetchData,toggle} from '../action/action.jsx';

class App extends Component {

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(fetchData())
    }

    handleClick(index){
        const {dispatch} = this.props;
        dispatch(toggle(index))
    }
    render() {
        let {rows,active} = this.props;
        return (
            <div>
                <Menu rows={rows} active={active} handleClick={this.handleClick.bind(this)}>
                </Menu>
            </div>)
    }
}

function storeFormatter(state) {
    let { rows,active } = state;
    const ret = {
        rows: rows.length?rows: [],
        active: active || 0,
    };
    return ret
}

export default connect(storeFormatter)(App)