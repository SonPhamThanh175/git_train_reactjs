import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import InputField from '../../../../components/form-controls/InputField';
import { Avatar, Button, LinearProgress, Typography, makeStyles } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import PasswordField from 'components/form-controls/PasswordField';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const useStyles = makeStyles(theme => ({
    root: {
        position: 'relative',
        paddingTop: theme.spacing(2)
    },
    avatar: {
        margin: '0 auto',
        // backgroundColor: theme.palette.secondary.main,
    },
    title: {
        textAlign: 'center',
        paddingTop: theme.spacing(2 ,0 ,4 ,0),
        color:'#333'
    },
    submit: {
        marginTop: theme.spacing(2) ,
        borderRadius: '40px !important',
        boxShadow:'0 0 10px rgba(0,0,0,.1)',
        cursor: 'pointer',
        color:'#333'
    },
    progress: {
        position: 'absolute',
        top : theme.spacing(1),
        left: 0,
        right:0,
    }
}));

LoginForm.propTypes = {
    allSubmit: PropTypes.func,
};

function LoginForm(props) {
    const classes = useStyles();

    const schema = yup.object().shape({

        identifier : yup
            .string()
            .required('Please enter your email address')
            .email('Please enter a valid email address'),
        password: yup
            .string()
            .required('Please enter your password')
    })


    const form = useForm({
        defaultValues: {
            identifier: '',
            password: '',
        },
        resolver: yupResolver(schema),
        // shouldUnregister: true,
      })
      
    
      
      const handleSubmit = async (values) => {
        const { onSubmit } = props;
        if (onSubmit) {
            await onSubmit(values);
        }

        form.reset();
        // Sau khi dang ki thanh cong thi chuyen ve trang Product
        // history.push('/products');
    };
    const history = useHistory()
    // const {isSubmitting} = form.formState

    return (
        <div className={classes.root}>
            {/* {isSubmitting && <LinearProgress className={classes.progress}/>} */}

            <Avatar className={classes.avatar}>
                <LockOutlined></LockOutlined>
            </Avatar>

            <Typography
                className={classes.title}
                component='h3'
                varrian='h5'
            >
               Sign In
            </Typography>

            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <InputField
                    name='identifier'
                    label='Email'
                    form={form}
                />
                <PasswordField
                    name='password'
                    label='Password'
                    form={form}
                />
                <Button
                    // disabled={isSubmitting}
                    type='submit'
                    className={classes.submit}
                    variant='contained'
                    color='white'
                    fullWidth
                    size='large'
                >
                    Sign in
                </Button>
            </form>
        </div>
    );
}

export default LoginForm;
