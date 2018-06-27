import { Enum } from '../redux/reducer/enum';

export const start = () => async (dispatch) => {
    dispatch({ type: Enum.ASYNC_REQUEST_UPDATE, data: { sending: 'sending', success: '', error: '' } })
}

export const success = () => async (dispatch) => {
    dispatch({ type: Enum.ASYNC_REQUEST_UPDATE, data: { sending: '', success: 'success', error: '' } })
}

export const error = () => async (dispatch) => {
    dispatch({ type: Enum.ASYNC_REQUEST_UPDATE, data: { sending: '', success: '', error: 'error' } })
}

export const end = () => async (dispatch) => {
    dispatch({ type: Enum.ASYNC_REQUEST_UPDATE, data: { sending: '', success: '', error: '' } })
}
