import React,{Component} from 'react';
import {connect} from 'react-redux';
import Table from '../component/table.jsx';
import Head from '../component/head.jsx';
import {fetchData} from '../action/action.jsx';

class App extends Component {
    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(fetchData())
    }

    render() {
        let {rows} = this.props;
        return (
            <div>
                <Head></Head>
                <Table rows={rows}>

                </Table>
            </div>)
    }
}

function storeFormatter(state) {
    console.log(state)
    let { table } = state;
    table = table || {
            rows: [],
            page: {},
            state: true
        };

    const ret = {
        rows: table.rows || [],
        page: table.page || {},
        state: table.state || true
    };
    return ret
}

export default connect(storeFormatter)(App)