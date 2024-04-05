import { yupResolver } from '@hookform/resolvers/yup';
import { LockOutlined } from '@material-ui/icons';
import { Button, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { makeStyles } from '@mui/styles';
import InputField from 'components/form-controls/InputField';
import PasswordField from 'components/form-controls/PasswordField';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField';

import * as yup from 'yup';

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: '20px',
    },
    avatar: {
        margin: '0 auto',
        backgroundColor: 'red',
    },

    title: {
        textAlign: 'center',
        margin: '2 0',
    },

    submit: {
        marginTop: '15px',
    },
}));

RegisterForm.propTypes = {
    allSubmit: PropTypes.func,
};

function RegisterForm({ props }) {
    const classes = useStyles();

    const schema = yup.object().shape({});
    const form = useForm({
        defaultValue: {
            fullName: ' ',
            email: ' ',
            password: ' ',
            retypePassword: ' ',
        },
        resolver: yupResolver(schema),
    });
    const handleSubmitForm = (data) => {
        console.log('debug data ->', data);
    };

    return (
        <div className={classes.root}>
            <Avatar className={classes.avatar}>
                <LockOutlined></LockOutlined>
            </Avatar>

            <Typography
                className={classes.title}
                component='h3'
                variant='h5'
            >
                Create an Account
            </Typography>

            <form
                onSubmit={() => {
                    form.handleSubmit(handleSubmitForm);
                }}
            >
                {/* <Button
                    type='submit'
                    className={classes.submit}
                    variant='contained'
                    color='primary'
                    fullWidth
                    // onClick={(e) => e?.preventDefault()}
                >
                    Create an Account
                </Button>

                <TextField
                        autoFocus
                        required
                        margin='dense'
                        id='name'
                        name='email'
                        label='Email Address'
                        type='email'
                        fullWidth
                        variant='standard'
                    />
                     <TextField
                        autoFocus
                        required
                        margin='dense'
                        id='name'
                        name='name'
                        label='Name'
                        type='name'
                        fullWidth
                        variant='standard'
                    />
                    <TextField
                        autoFocus
                        required
                        margin='dense'
                        id='password'
                        name='password'
                        label='Password'
                        type='password'
                        fullWidth
                        variant='standard'
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
                />  */}
            </form>
        </div>
    );
}

export default RegisterForm;
