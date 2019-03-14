import jsonPlaceholder from '../apis/jsonPlaceholder'
import _ from 'lodash';

export const fetchPosts = () => async(dispatch) => {
    const response = await jsonPlaceholder.get('/posts');
    dispatch({type: 'FETCH_POSTS', payload: response.data});
}
/* without memoize function of lodash:
export const fetchUser = (id) => async(dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${id}`);
    dispatch({type: 'FETCH_USER', payload: response.data});
}

with memoize function of lodash: */
export const fetchUser = (id) => (dispatch) => _fetchUser(id, dispatch);

export const _fetchUser = _.memoize(async(id, dispatch) => {
    const response = await (jsonPlaceholder.get(`/users/${id}`));
    dispatch({type: 'FETCH_USER', payload: response.data});
});