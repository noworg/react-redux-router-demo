import React,{Component} from 'react';

export default class Head extends Component {
    handSubmit(){
        //alert(this.refs.myTextInput.value);
        const {searchSubmit} = this.props;
        searchSubmit(this.refs.myTextInput.value);
    }
    render() {
        return (
            <form className="form-inline">
                <div className="form-group">
                    <label htmlFor="exampleInputName2">Name</label>
                    <input type="text" className="form-control" style={{marginLeft:'16px'}} ref="myTextInput"  id="exampleInputName2" placeholder="hdsbssssss" />
                </div>
                <button type="button" onClick={this.handSubmit.bind(this)} className="btn btn-default" style={{marginLeft:'16px'}} >查询ss</button>
            </form>
        )
    }
}