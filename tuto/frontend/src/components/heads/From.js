import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { addHead } from '../../actions/heads';

export class Form extends Component {
    state = {
        name: '',
        eamil: '',
        message: ''
    };

    static PropTypes = {
        addHead: PropTypes.func.isRequired
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    onSubmit = e => {
        e.preventDefault();
        const { name, eamil, message } = this.state;
        const head = { name, eamil, message };
        this.props.addHead(head);
        this.setState({
            name: "",
            eamil: "",
            message: ""
        })
    }

    render() {
        const { name, eamil, message } = this.state;
        return (
            <div className="card card-body mt-4 mb-4">
                <h2>Add Lead</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input
                            className="form-control"
                            type="text"
                            name="name"
                            onChange={this.onChange}
                            value={name}>
                        </input>
                    </div>
                    <div className="form-group">
                        <label>Eamil</label>
                        <input
                            className="form-control"
                            type="email"
                            name="eamil"
                            onChange={this.onChange}
                            value={eamil}>
                        </input>
                    </div>
                    <div className="form-group">
                        <label>Message</label>
                        <input
                            className="form-control"
                            type="text"
                            name="message"
                            onChange={this.onChange}
                            value={message}>
                        </input>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default connect(null, { addHead })(Form)
