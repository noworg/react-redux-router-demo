import React,{Component} from 'react';
import {connect} from 'react-redux';
import Table from '../component/table.jsx';
import Head from '../component/head.jsx';
import {fetchData,search} from '../action/action.jsx';

class App extends Component {
    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(fetchData())
    }

    searchSubmit(text){
        const {dispatch} = this.props;
        //dispatch
        //alert("ss"+text)
        dispatch(search(text))
    }
    render() {
        let {rows} = this.props;
        return (
            <div className="tableContainer">
                <Head searchSubmit={this.searchSubmit.bind(this)}></Head>
                <Table rows={rows}>

                </Table>
            </div>)
    }
}

function storeFormatter(state) {
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