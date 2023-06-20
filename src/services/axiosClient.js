const getToken = () => localStorage.getItem('token')


const headers = {
    'Content-Type': 'application/json',
    'authorization': `Bearer ${getToken()}`
};

export default headers;
