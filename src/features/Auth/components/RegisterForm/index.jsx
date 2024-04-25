import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import InputField from '../../../../components/form-controls/InputField';
import { Avatar, Button, Typography, makeStyles } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import PasswordField from 'components/form-controls/PasswordField';

const useStyles = makeStyles(theme => ({
    root: {
        paddingTop: theme.spacing(2)
    },
    avatar: {
        margin: '0 auto',
        backgroundColor: theme.palette.secondary.main,
    },
    title: {
        textAlign: 'center',
        paddingTop: theme.spacing(2 ,0 ,4 ,0)
    },
    submit: {
        marginTop: theme.spacing(2)
    },
}));

RegisterForm.propTypes = {
    allSubmit: PropTypes.func,
};

function RegisterForm(props) {
    const classes = useStyles();

    const schema = yup.object().shape({
        // fullName: yup
        //     .string()
        //     .required('Please enter your Full Name')
        //     .test('should has at least 2 words','Please enter at least 2 words.', (value)=>{
        //         return value.split(' ').length >= 2;
        //     }),
        email : yup
            .string()
            .required('Please enter your email address')
            .email('Please enter a valid email address'),
        password: yup
            .string()
            .required('Please enter your password')
            // .min(6 , 'Please enter at least 6 characters')
    })


    const form = useForm({
        defaultValues: {
            fullName: '',
            email: '',
            password: '',
            retypePassword: '',
        },
        resolver: yupResolver(schema),
        // shouldUnregister: true,
      })
      
    
      
      const handleSubmit = (values) => {
        console.log(form.errors)
        const { onSubmit } = props;
        if (onSubmit) {
            onSubmit(values);
        }

        form.reset();
    };
    return (
        <div className={classes.root}>
            <Avatar className={classes.avatar}>
                <LockOutlined></LockOutlined>
            </Avatar>

            <Typography
                className={classes.title}
                component='h3'
                varrian='h5'
            >
                Create An Account
            </Typography>

            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <InputField
                    name='fullName'
                    label='Full Name'
                    form={form}
                />
                <InputField
                    name='email'
                    label='Email'
                    form={form}
                />
                <PasswordField
                    name='password'
                    label='Password'
                    form={form}
                />
                <PasswordField
                    name='retypePassword'
                    label='Retype Password'
                    form={form}
                />
                <Button
                    type='submit'
                    className={classes.submit}
                    variant='contained'
                    color='primary'
                    fullWidth
                >
                    Create an Account
                </Button>
            </form>
        </div>
    );
}

export default RegisterForm;
