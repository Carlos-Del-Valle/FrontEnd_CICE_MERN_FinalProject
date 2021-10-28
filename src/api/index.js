export const url =
    process.env.NODE_ENV === 'development'
        ? 'http://localhost:5000/api'
        : 'https://backend-cice-mern-finalproject.herokuapp.com/api';

export const setHeaders = () => {
    const header = {
        headers: {
            "x-auth-token" : localStorage.getItem("token")
        }
    }

    return header
}