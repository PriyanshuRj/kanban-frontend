const getToken = () => {
    return localStorage.getItem('token')
}

function getHeader(){
    return {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${getToken()}`
    }
}

export default getHeader;
