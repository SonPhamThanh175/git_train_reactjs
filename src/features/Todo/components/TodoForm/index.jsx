import PropTypes from 'prop-types';
import React from 'react';
// import InputField from '../../../../components/form-controls/InputField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import InputField from 'components/form-controls/InputField';


TodoForm.propTypes = {
    allSubmit: PropTypes.func,
};

function TodoForm(props) {
    const schema = yup
        .object({
            title: yup.string().required('Please enter a title'),
        })
        .required();
    const form = useForm({
        defaultValue: {
            title: '',
        },
        resolver: yupResolver(schema),
    });
    const handleSubmit = (values) => {
        console.log('Todo form ', values);
        const {onSubmit} = props;
        if (onSubmit){
            onSubmit(values);
        }

        form.reset();
    };
    return (
        <form onSubmit={form.handleSubmit(handleSubmit)}>
            <InputField
                name='title'
                label='Todo'
                form={form}
            />
        </form>
    );
}

export default TodoForm;
