import React,{Component} from 'react';
import classNames from 'classnames';
import {toggleLeft} from '../action/action.jsx';
import {connect} from 'react-redux';
export default class Home extends Component {
    bindClick(status) {
        const {dispatch} = this.props
        dispatch(toggleLeft(status))
    }

    render() {
        const {left} = this.props
        var btnClass = classNames({
            'homeContainer': true,
            'hideLeft': left
        });
        return (
            <div>
                <div className="funBar">
                    <a className="leftShow" onClick={this.bindClick.bind(this,false)}>
                        <span className="glyphicon glyphicon-menu-hamburger"></span>
                    </a>
                </div>
                <div className={btnClass}>
                    <div className="top">
                        <a onClick={this.bindClick.bind(this,true)} style={{lineHeight: '48px',fontSize: 24}}>
                            <span className="glyphicon glyphicon-menu-left"></span>
                        </a>
                    </div>
                    <div className="midd">

                    </div>
                    <div className="bottom">

                    </div>
                </div>
            </div>
        )
    }
}

function storeFormatter(state) {
    let { left } = state;

//if (active === undefined) {
//    if(routing.locationBeforeTransitions.pathname=="./"){
//
//    }
//}
    const ret = {
        left: left || false
    };
//console.log(ret)
    return ret
}

export default connect(storeFormatter)(Home)