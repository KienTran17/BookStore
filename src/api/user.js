import { CFG } from '../../config';
export const register = ({ username, password }) => (
    fetch(`${CFG.host}/api/register`, { 
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({ username, password })
    })
    .then(res => res.json())
);
