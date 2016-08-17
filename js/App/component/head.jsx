import React,{Component} from 'react';

export default class Head extends Component {
    render() {
        return (
            <form className="form-inline" style={{color:'#f00'}}>
                <div className="form-group">
                    <label htmlFor="exampleInputName2">Name</label>
                    <input type="text" className="form-control" id="exampleInputName2" placeholder="Jane Doe" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail2">Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail2" placeholder="jane.doe@example.com" />
                </div>
                <button type="button" className="btn btn-default">Send invitation</button>
            </form>
        )
    }
}