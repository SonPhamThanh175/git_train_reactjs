import { unwrapResult } from '@reduxjs/toolkit';
import { login } from 'features/Auth/userSlice';
import { useSnackbar } from 'notistack';
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from '../LoginForm';
import { Button, IconButton } from '@material-ui/core';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

// function Login(props) {
//   //Test1 
//   //---------------------------------------------------------
//   // const loggedInUser = useSelector(state => state.user.current);
//   // const isLoggedIn = !!loggedInUser.id;
//   // const history = useHistory();
//   //Test1
//   //---------------------------------------------------------


//     const dispatch = useDispatch();
//     const {enqueueSnackbar} = useSnackbar();

//     const handleSubmit = async (values) => {
//       try{
//         const action = login(values)
//         const resultAction = await dispatch(action)
//         unwrapResult(resultAction)
//          //Test1
//          //---------------------------------------------------------
//         // if(isLoggedIn){
//         //   history.push('/products');
//         // }
//          //Test1
//          //---------------------------------------------------------

//       }catch(error){
//         console.log('Failed to login : ',error);
//         enqueueSnackbar(error.message,{variant:'error'})
//       }
//     }
//   return (
//     <div>
//         <LoginForm onSubmit = {handleSubmit}/>
//     </div>
//   )
// }

// Login.propTypes = {}

// export default Login

import React, { useEffect, useState } from 'react';
// Import các dependencies khác...

function Login(props) {
  const [redirected, setRedirected] = useState(false); // Thêm state mới để xác định đã chuyển hướng hay chưa

  const loggedInUser = useSelector(state => state.user.current);
  const isLoggedIn = !!loggedInUser.id;
  const history = useHistory();
  const dispatch = useDispatch();
  const {enqueueSnackbar} = useSnackbar();

  useEffect(() => {
    // Kiểm tra giá trị mới của isLoggedIn và chuyển hướng nếu cần
    if (isLoggedIn && !redirected) {
      setRedirected(true);
      history.push('/products');
    }
  }, [isLoggedIn, redirected, history]);

  const handleSubmit = async (values) => {
    try {
      const action = login(values);
      const resultAction = await dispatch(action);
      unwrapResult(resultAction);
      console.log("unwrapResult(resultAction)", unwrapResult(resultAction));
    } catch(error) {
      console.log('Failed to login : ',error);
      enqueueSnackbar(error.message,{variant:'error'});
    }
  }

  return (
    <div>
      <LoginForm onSubmit = {handleSubmit}/>
    </div>
  );
}

export default Login;
