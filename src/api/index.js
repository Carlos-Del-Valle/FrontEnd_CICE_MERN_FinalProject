export const url =
    process.env.NODE_ENV === 'development'
        ? 'http://localhost:5000/api'
        : 'https://backend-cice-mern-finalproject.herokuapp.com/api';

export const setHeaders = () => {
    return {
        headers: {
            "x-auth-token": localStorage.getItem("token")
        }
    }
}