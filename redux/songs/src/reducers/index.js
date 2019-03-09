import { combineReducers } from 'redux';

//it's an exaggeration to use songsReducer, I'm doing it to learn
const songsReducer = () => {
    return [
        {title: 'Music One', duration: '4:12'},
        {title: 'Lalalala', duration: '3:04'},
        {title: 'Hey Hooh', duration: '3:26'},
        {title: 'Music Four', duration: '4:18'}
    ];
}

const SelectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: SelectedSongReducer
});