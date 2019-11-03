import { combineReducers } from 'redux';

const songsReducer = _ => {
  return [
    { 
      title: 'No Scrubs',
      duration: '4:05'
    },
    { 
      title: 'Call me maybe',
      duration: '2:55'
    },
    { 
      title: 'All star',
      duration: '3:42'
    },
    { 
      title: 'I want it that way',
      duration: '4:32'
    }
  ];
}

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
}

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});