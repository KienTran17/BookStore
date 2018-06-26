import { get } from './api';
import { Enum } from '../redux/reducer/enum';

export const getAllBook = () => async (dispatch) => {
    const { code, message} = await get('/api/book')
    dispatch({ type: Enum.BOOK_UPDATE_STATE, data: { list: message } })
}
