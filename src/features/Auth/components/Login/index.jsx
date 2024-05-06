import { unwrapResult } from '@reduxjs/toolkit';
import { login } from 'features/Auth/userSlice';
import { useSnackbar } from 'notistack';
import { useDispatch } from 'react-redux';
import LoginForm from '../LoginForm';

function Login(props) {
    const dispatch = useDispatch();
    const {enqueueSnackbar} = useSnackbar();

    const handleSubmit = async (values) => {
      try{
        const action = login(values)
        const resultAction = await dispatch(action)
        unwrapResult(resultAction)
      }catch(error){
        console.log('Failed to login : ',error);
        enqueueSnackbar(error.message,{variant:'error'})
      }
    }
  return (
    <div>
        <LoginForm onSubmit = {handleSubmit}/>
    </div>
  )
}

Login.propTypes = {}

export default Login
