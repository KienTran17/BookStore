import { CFG } from '../../config';
import api from './api';

export const register = async ({ username, password }) => {
    await api.post('/api/register', { username, password })

};