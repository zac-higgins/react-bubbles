const axiosWithAuth = () => {
    return axios.create({
        headers: {
            authorization: sessionStorage.getItem("token")
        }
    });
};

export default axiosWithAuth;