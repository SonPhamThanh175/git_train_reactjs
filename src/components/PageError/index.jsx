
import React from 'react';
import { Result, Button } from 'antd';
import { Link } from 'react-router-dom';
import SlideShow from 'components/SlideShow';

const NotFound = () => {
  return (
    // <Result
    //   status="404"
    //   title="404"
    //   subTitle="Sorry, the page you visited does not exist."
    //   extra={
    //     <Link to="/products">
    //       <Button type="primary">Back Home</Button>
    //     </Link>
    //   }
    // />
    <SlideShow/>
  );
};

export default NotFound;

