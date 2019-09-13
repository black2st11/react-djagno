import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getHeads, deleteHead } from '../../actions/heads';

export class Heads extends Component {
    static PropTypes = {
        heads: PropTypes.array.isRequired,
        getHeads: PropTypes.func.isRequired,
        deleteHead: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getHeads();
    }

    render() {
        return (
            <Fragment>
                <h2>Heads</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Message</th>
                            <th>owner</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.heads.map(head => (
                            <tr key={head.id}>
                                <td>{head.id}</td>
                                <td>{head.name}</td>
                                <td>{head.eamil}</td>
                                <td>{head.message}</td>
                                <td>{head.owner}</td>
                                <td>
                                    <button onClick={this.props.deleteHead.bind(this, head.id)} className="btn btn-danger btn-sm">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    heads: state.heads.heads
});

export default connect(mapStateToProps, { getHeads, deleteHead })(Heads);
