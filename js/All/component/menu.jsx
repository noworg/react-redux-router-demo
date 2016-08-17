import React,{Component} from 'react';

export default class Menu extends Component {
    toggle(i){
        //alert(i);
        const {handleClick} = this.props;
        handleClick(i);
    }
    render() {
        const {rows,active} = this.props;
        let colRow = [];
        for (let i = 0; i < rows.length; i++) {
            let className = '';
            if (i == active) {
                className = 'active';
            }
            colRow.push(<li key={rows[i].id}><a className={className} onClick={this.toggle.bind(this,i)}   href="#">{rows[i].title}</a></li>)
        }
        return (
            <div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                                    data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="#">Brand</a>
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
}