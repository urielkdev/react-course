import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends Component {

    renderError({error, touched}) {
        if (error && touched) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }

    renderInput = ({ input, label, meta }) => {
        // parsing the props to input, like the onChange and value
        const divClassName = `field ${meta.error && meta.touched ? 'error' : null}`
        return (
            <div className={divClassName}>
                <label>{label}</label>
                <input {...input} autoComplete="off" />
                {this.renderError(meta)}
            </div>
        );
    }

    onSubmit(formValues) {
        console.log(formValues);
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field name="title" component={this.renderInput} label="Title:" />
                <Field name="description" component={this.renderInput} label="Description:" />
                <button className="ui button primary">Submit</button>
            </form>
        );
    }
}

const validate = ({title, description}) => {
    let errors = {};
    if (!title) {
        errors.title = 'You must enter a title';
    }
    if (!description) {
        errors.description = 'You must enter a description';
    }
    return errors;
}

export default reduxForm({
    form: 'streamCreate',
    validate
})(StreamCreate);