import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'https://api.ezfrontend.com/',
    headers: {
        'Content-Type': 'application/json',
    },
});

// Add a request interceptor
axiosClient.interceptors.request.use(
    function (config) {
        // Do something before request is sent
        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    },
);

// Add a response interceptor
axiosClient.interceptors.response.use(
    function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response.data;
    },
    // function (error) {
    //     // Any status codes that falls outside the range of 2xx cause this function to trigger
    //     // Do something with response error
    //     const { config, status, data } = error.response;
    //     if (config.url === '/auth/local/register' && status === 400) {
    //         const errorList = data.data || [];
    //         const firstErrors = errorList.length > 0 ? errorList[0] : {};
    //         const messageList = firstErrors.messages || [];
    //         const firstMessage = messageList.length > 0 ? messageList[0] : {};
    //         throw new Error(firstMessage.messages);
    //     }
    //     return Promise.reject(error);
    // },
    function(error) {
      // Any status codes that fall outside the range of 2xx cause this function to trigger
      // Do something with response error
      const { config, status, data } = error.response;
      const URLS = ['/auth/local/register','/auth/local']
      if (URLS.includes(config.url) && status === 400) {
          const errorList = data.data || [];
          if (errorList.length > 0) {
              const firstErrors = errorList[0];
              if (firstErrors.messages && firstErrors.messages.length > 0) {
                  const firstMessage = firstErrors.messages[0];
                  throw new Error(firstMessage.message || 'Unknown error occurred');
              }
          }
      }
      // Handle other error cases here if needed
      return Promise.reject(error);
  }
  
);

export default axiosClient;
