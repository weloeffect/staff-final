const login = async (data) => {
    const response = await fetch('http://localhost:5000/api/user/login',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: {
            email : data.email,
            password: data.password,
        }
    })
    return response.data;
}

 const  authService = {
    login,
 }

 export default authService;