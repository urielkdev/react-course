import jsonPlaceholder from '../apis/jsonPlaceholder'

export const fetchPosts = () => (dispatch) => {
    const response = jsonPlaceholder('/posts');
    
    dispatch({type: 'FETCH_POST', payload: response});
}