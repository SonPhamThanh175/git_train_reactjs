import axiosClient from "./axiosClient"

const userApi = {
    register(data){
        // const url = '/auth/local/register';
        const url = 'api/user/sign-up';
        return axiosClient.post(url,data)
    },

    login(data){
        // const url = '/auth/local';
        const url = 'api/user/sign-in';
        return axiosClient.post(url,data)
    },
}
// console.log('userApi',userApi);

export default userApi