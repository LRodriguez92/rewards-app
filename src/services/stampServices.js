import axios from 'axios'

export const stamp = (id, reward) => {
    axios.put(`${process.env.REACT_APP_BACKEND_URL}/api/users/${id}`, 
    {
        rewards: reward
    },
    {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('jwt')}`,
            'Content-Type': 'application/json',
        },
    })
    .then((response) => {
        console.log('Stamped!');
        console.log(response.data);
    })
    .catch((error) => {
        console.log('An error occurred:', error);
    })
}
