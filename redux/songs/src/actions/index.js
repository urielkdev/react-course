// Action Creator
// this export is different from the others because 
// it is a named export and not a standard export like <App />
// on the import is needed to use {}
export const selectSong = (song) => {
    return {
        //Return a action
        type: 'SONG_SELECTED',
        payload: song
    }
}