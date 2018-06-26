import { CFG } from '../../config';

export const post = async (url, data) => (
    await fetch(`${CFG.host}${url}`, { 
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(result => result)
)

export const get = async (url) => (
    await fetch(`${CFG.host}${url}`, { 
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        credentials: 'include',
    })
    .then(res => res.json())
    .then(result => result)
)
