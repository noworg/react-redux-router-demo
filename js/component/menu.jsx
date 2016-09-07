import React,{Component} from 'react';
import { Link,withRouter,hashHistory } from 'react-router'

const Menu = withRouter(
    React.createClass({
        toggle(i){
            const {rows,handleClick} = this.props;
            handleClick(i);
            return hashHistory.push(rows[i].url);
        },
        render() {
            const {rows,active,routing} = this.props;
            let colRow = [];
            for (let i = 0; i < rows.length; i++) {
                let className = '';
                if (routing.locationBeforeTransitions.pathname == '/' && i==0) {
                    className = 'active';
                    colRow.push(<li key={rows[i].id}><a className={className}
                                                        onClick={this.toggle.bind(this,i)}>{rows[i].title}</a></li>)
                    //return
                } else {
                    if (rows[i].url == routing.locationBeforeTransitions.pathname) {
                        className = 'active';
                    }
                    colRow.push(<li key={rows[i].id}><a className={className}
                                                        onClick={this.toggle.bind(this,i)}>{rows[i].title}</a></li>)
                }
            }
            return (
                <div>
                    <nav className="navbar navbar-default">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                                        data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                    <span className="sr-only">Toggle navigation</span>
                                </button>
                                <Link to="home" className="navbar-brand">Brand</Link>
                            </div>

                            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                <ul className="nav navbar-nav">
                                    {colRow}
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            )
        }
    })
)

export default Menu