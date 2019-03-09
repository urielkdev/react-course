import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({song}) => {
    const songDetailDiv = (song) => (
        <div style={{textAlign: 'center', alignItems: 'center', marginTop: '20px'}}>
            <h2>Details for:</h2>
            <h3>Title: {song.title}</h3>
            <p>Duration: {song.duration}</p>
        </div>
    );

    return (
        <div>
            {song ? songDetailDiv(song) : 'Select a song'}                        
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        song: state.selectedSong
    };
}

export default connect(mapStateToProps)(SongDetail);