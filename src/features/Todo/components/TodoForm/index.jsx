import PropTypes from 'prop-types';
import React from 'react';
import InputField from '../../../../components/form-controls/InputField';
import { useForm } from "react-hook-form"

TodoForm.propTypes = {
    allSubmit: PropTypes.func,
};

function TodoForm(props) {
    const form = useForm({
        defaultValue: {
            title: ' ',
        },
    });
    const handleSubmit = (values) => {
        console.log('Todo form ' ,values);
    }
    return (
        <form
            onSubmit={form.handleSubmit(handleSubmit)}
        >
            <InputField
                name='title'
                label='Todo'
                form={form}
            />
        </form>
    );
}

export default TodoForm;
