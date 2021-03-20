import { axiosWithAuth } from './axiosWithAuth';

export const getCOlors = () => {
    return axiosWithAuth()
        .get("http://localhost:5000/api/colors")
        .then(res => console.log(`Retrieving colors ${res}`))
        .catch(err => console.log(`Retrieving colors error ${err}` ))
}