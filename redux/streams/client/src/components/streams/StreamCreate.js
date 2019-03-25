import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends Component {
    renderInput({ input, label }) {
        // parsing the props to input, like the onChange and value
        return (
            <div className="field">
                <label>{label}</label>
                <input {...input} />
            </div>
        );
    }

    onSubmit(formValues) {
        console.log(formValues);
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form">
                <Field name="title" component={this.renderInput} label="Title:" />
                <Field name="description" component={this.renderInput} label="Description:" />
                <button className="ui button primary">Submit</button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'streamCreate'
})(StreamCreate);