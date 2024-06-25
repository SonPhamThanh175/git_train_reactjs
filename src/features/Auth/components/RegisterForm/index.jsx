import { yupResolver } from '@hookform/resolvers/yup';
import { Avatar, Button, LinearProgress, Typography, makeStyles } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import PasswordField from 'components/form-controls/PasswordField';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import InputField from '../../../../components/form-controls/InputField';

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
        marginTop: theme.spacing(2),
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
            confirmPassword: '',
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
        // Sau khi dang ki thanh cong thi chuyen ve trang Albums
        // history.push('/albums');
    };
    // const history = useHistory()
    const {isSubmitting} = form.formState

    return (
        <div className={classes.root}>
            {isSubmitting && <LinearProgress className={classes.progress}/>}

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
                    name='confirmPassword'
                    label='Retype Password'
                    // name='confirmPassword'
                    // label='Retype Password'
                    form={form}
                />
                <Button
                    // disabled={isSubmitting}
                    type='submit'
                    className={classes.submit}
                    variant='contained'
                    color='default'
                    fullWidth
                    size='large'
                >
                    Create an Account
                </Button>
            </form>
        </div>
    );
}

export default RegisterForm;

