const getToken = () => localStorage.getItem('token')


const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${getToken()}`
};

export default headers;
