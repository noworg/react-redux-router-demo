import React,{Component} from 'react';

export default class Table extends Component {
    render() {
        const {rows} = this.props;
        let tableRow = [];
        for (let i = 0; i < rows.length; i++) {
            tableRow.push(<tr key={rows[i].id}>
                <td>{rows[i].id}</td>
                <td>{rows[i].name}</td>
                <td>{rows[i].birth}</td>
            </tr>)
        }
        return (
            <table className="table table-striped total-table">
                <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>birth</th>
                </tr>
                </thead>

                <tbody>
                {tableRow}
                </tbody>

            </table>
        )
    }
}