import { unwrapResult } from '@reduxjs/toolkit';
import { register } from 'features/Auth/userSlice';
import { useDispatch } from 'react-redux';
import RegisterForm from '../RegisterForm';

function Register(props) {
    const dispatch = useDispatch();

    const handleSubmit = async (values) => {
      try{
        //auto set username = email
        values.username = values.email

        console.log('Form submit',values);
        const action = register(values)
        const resultAction = await dispatch(action)
        // console.log('Result Action',resultAction);

        const user = unwrapResult(resultAction)
        console.log('New user',user);
      }catch(error){
        console.log('Failed to register : ',error);
      }
    }
  return (
    <div>
        <RegisterForm onSubmit = {handleSubmit}/>
    </div>
  )
}

Register.propTypes = {}

export default Register
