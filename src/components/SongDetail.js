import React from 'react';
import { connect } from 'react-redux';

function SongDetail({ song }) {
  if (!song) {
    return <div>Select a song please!</div>;
  }

  return (
    <div>
      <h3 className="">Details for</h3>
      <p>
        Title: {song.title}
        <br />
        Duration: {song.duration}
      </p>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);