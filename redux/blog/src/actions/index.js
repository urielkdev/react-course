import jsonPlaceholder from '../apis/jsonPlaceholder'
import _ from 'lodash';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    console.log('Started to fetchPosts');
    await dispatch(fetchPosts());
    console.log('fetchPosts finished!');

    const userIds = _.uniq(_.map(getState().posts, 'userId'));
    userIds.forEach(id => dispatch(fetchUser(id)));
    

}

export const fetchPosts = () => async(dispatch) => {
    const response = await jsonPlaceholder.get('/posts');
    dispatch({type: 'FETCH_POSTS', payload: response.data});
}

// without memoize function of lodash:
export const fetchUser = (id) => async(dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${id}`);
    dispatch({type: 'FETCH_USER', payload: response.data});
}



/* 
export const fetchUser = (id) => (dispatch) => _fetchUser(id, dispatch);

export const _fetchUser = _.memoize(async(id, dispatch) => {
    const response = await (jsonPlaceholder.get(`/users/${id}`));
    dispatch({type: 'FETCH_USER', payload: response.data});
});
with memoize function of lodash: */