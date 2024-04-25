import { unwrapResult } from '@reduxjs/toolkit';
import { register } from 'features/Auth/userSlice';
import { useDispatch } from 'react-redux';
import RegisterForm from '../RegisterForm';

function Register(props) {
    const dispatch = useDispatch();

    const handleSubmit = async (values) => {
      console.log('Form submit',values);
      const action = register(values)
      console.log(action);
      // const resultAction = await dispatch(action)
      // const user = unwrapResult(resultAction)
      // console.log('New user',user);
    }
  return (
    <div>
        <RegisterForm onSubmit = {handleSubmit}/>
    </div>
  )
}

Register.propTypes = {}

export default Register
